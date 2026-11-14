require "active_support/all"
require "nokogiri"
require "open-uri"
require "json"

module Helpers
  extend ActiveSupport::NumberHelper
end

module Jekyll
  # Renders the Google Scholar citation count for a single publication.
  #
  # Usage: {% google_scholar_citations <scholar_user_id> <article_id> %}
  #
  # Google Scholar serves a bot-verification interstitial for the per-article
  # pages ("citations?view_op=view_citation&..."), which is why scraping them
  # one by one started returning N/A. Instead we fetch the author's profile
  # page ONCE per build -- it lists every publication with its citation count --
  # and cache the result in .scholar-citations.json. If the fetch is ever
  # blocked, the cached counts are used, so the badges never regress to N/A.
  #
  # Set SCHOLAR_NO_FETCH=1 to build entirely from the cache (no network).
  class GoogleScholarCitationsTag < Liquid::Tag
    CACHE_FILE = ".scholar-citations.json"
    USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " \
                 "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    PAGE_SIZE = 100

    @@cache = nil
    @@fetched = false
    @@dirty = false

    def self.cache
      @@cache ||= begin
        if File.exist?(CACHE_FILE)
          JSON.parse(File.read(CACHE_FILE))
        else
          {}
        end
      rescue StandardError => e
        puts "[scholar] could not read #{CACHE_FILE} (#{e.class}: #{e.message})"
        {}
      end
    end

    # Fetch every citation count from the author profile page, once per build.
    def self.refresh(scholar_id)
      return if @@fetched
      @@fetched = true

      if ENV["SCHOLAR_NO_FETCH"] == "1"
        puts "[scholar] SCHOLAR_NO_FETCH=1, using cached citation counts"
        return
      end

      counts = {}
      cstart = 0

      loop do
        url = "https://scholar.google.com/citations?hl=en&user=#{scholar_id}" \
              "&view_op=list_works&cstart=#{cstart}&pagesize=#{PAGE_SIZE}"
        doc = Nokogiri::HTML(URI.open(url, "User-Agent" => USER_AGENT, :read_timeout => 30))
        rows = doc.css("tr.gsc_a_tr")
        break if rows.empty?

        rows.each do |row|
          link = row.at_css("a.gsc_a_at")
          next if link.nil?

          match = link["href"].to_s.match(/citation_for_view=[^:]+:([^&]+)/)
          next if match.nil?

          cited_by = row.at_css("a.gsc_a_ac")
          counts[match[1]] = cited_by.nil? ? 0 : cited_by.text.strip.delete(",").to_i
        end

        break if rows.size < PAGE_SIZE
        cstart += PAGE_SIZE
        sleep(rand(1.0..2.0))
      end

      if counts.empty?
        puts "[scholar] profile page returned no publications; keeping cached counts"
        return
      end

      merged = cache.merge(counts)
      unless merged == cache
        @@cache = merged
        @@dirty = true
        write_cache
      end

      puts "[scholar] fetched citation counts for #{counts.size} publications"
    rescue Exception => e
      puts "[scholar] could not refresh citation counts (#{e.class}: #{e.message}); using cached values"
    end

    def self.write_cache
      return unless @@dirty
      File.write(CACHE_FILE, JSON.pretty_generate(Hash[cache.sort]) + "\n")
      @@dirty = false
    rescue StandardError => e
      puts "[scholar] could not write #{CACHE_FILE} (#{e.class}: #{e.message})"
    end

    def initialize(tag_name, params, tokens)
      super
      splitted = params.split(" ").map(&:strip)
      @scholar_id = splitted[0]
      @article_id = splitted[1]

      puts "Invalid scholar_id provided" if @scholar_id.nil? || @scholar_id.empty?
      puts "Invalid article_id provided" if @article_id.nil? || @article_id.empty?
    end

    def render(context)
      article_id = context[@article_id.strip].to_s
      scholar_id = context[@scholar_id.strip].to_s

      self.class.refresh(scholar_id) unless scholar_id.empty?

      count = self.class.cache[article_id]

      if count.nil?
        puts "[scholar] no citation count available for article #{article_id}"
        # URL-encoded so the shields.io badge renders "N/A" instead of breaking.
        return "N%2FA"
      end

      Helpers.number_to_human(
        count,
        :format => "%n%u",
        :precision => 2,
        :units => { :thousand => "K", :million => "M", :billion => "B" }
      ).to_s
    end
  end
end

Liquid::Template.register_tag("google_scholar_citations", Jekyll::GoogleScholarCitationsTag)
