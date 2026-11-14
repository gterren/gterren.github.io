require "json"
require "time"
require "open-uri"

module Jekyll
  # Fetches metadata (description, stars, forks, language) for the repositories
  # listed in _data/repositories.yml and exposes it as site.data.github_repo_metadata,
  # so repository cards are rendered by the site itself instead of being pulled
  # from the third-party github-readme-stats service (which goes down and
  # rate-limits, leaving broken images on the page).
  #
  # Results are cached in .github-repos.json and refreshed at most every TTL
  # seconds. If GitHub is unreachable, the cached values are used.
  #
  # Set GITHUB_NO_FETCH=1 to build entirely from the cache (no network).
  # Set GITHUB_TOKEN to raise the API rate limit (60/hour when unauthenticated).
  class GithubRepoMetadata < Generator
    safe true
    priority :high

    CACHE_FILE = ".github-repos.json"
    TTL = 6 * 60 * 60 # seconds
    USER_AGENT = "al-folio-site"

    def generate(site)
      repos = site.data.fetch("repositories", {})["github_repos"] || []
      return if repos.empty?

      cache = read_cache
      metadata = cache["repos"] || {}

      if refresh?(cache)
        fetched = fetch_all(repos)
        unless fetched.empty?
          metadata = metadata.merge(fetched)
          write_cache("fetched_at" => Time.now.utc.iso8601, "repos" => metadata)
          puts "[repos] fetched metadata for #{fetched.size} of #{repos.size} repositories"
        end
      end

      missing = repos.reject { |r| metadata.key?(r) }
      puts "[repos] no metadata available for: #{missing.join(', ')}" unless missing.empty?

      site.data["github_repo_metadata"] = metadata
    end

    private

    def refresh?(cache)
      if ENV["GITHUB_NO_FETCH"] == "1"
        puts "[repos] GITHUB_NO_FETCH=1, using cached repository metadata"
        return false
      end
      return true if cache.empty? || cache["fetched_at"].nil?

      Time.now.utc - Time.parse(cache["fetched_at"]) > TTL
    rescue StandardError
      true
    end

    def fetch_all(repos)
      fetched = {}

      repos.each do |repo|
        data = fetch_one(repo)
        fetched[repo] = data unless data.nil?
      end

      fetched
    end

    def fetch_one(repo)
      headers = {
        "User-Agent" => USER_AGENT,
        "Accept" => "application/vnd.github+json",
        :read_timeout => 20,
      }
      headers["Authorization"] = "Bearer #{ENV['GITHUB_TOKEN']}" if ENV["GITHUB_TOKEN"]

      raw = URI.open("https://api.github.com/repos/#{repo}", headers).read
      data = JSON.parse(raw)

      {
        "full_name" => data["full_name"],
        "name" => data["name"],
        "owner" => data.dig("owner", "login"),
        "description" => data["description"],
        "language" => data["language"],
        "stars" => data["stargazers_count"],
        "forks" => data["forks_count"],
        "archived" => data["archived"],
        "html_url" => data["html_url"],
        "pushed_at" => data["pushed_at"],
      }
    rescue Exception => e
      puts "[repos] could not fetch #{repo} (#{e.class}: #{e.message}); using cached value"
      nil
    end

    def read_cache
      return {} unless File.exist?(CACHE_FILE)

      JSON.parse(File.read(CACHE_FILE))
    rescue StandardError => e
      puts "[repos] could not read #{CACHE_FILE} (#{e.class}: #{e.message})"
      {}
    end

    def write_cache(payload)
      payload["repos"] = Hash[payload["repos"].sort]
      File.write(CACHE_FILE, JSON.pretty_generate(payload) + "\n")
    rescue StandardError => e
      puts "[repos] could not write #{CACHE_FILE} (#{e.class}: #{e.message})"
    end
  end
end
