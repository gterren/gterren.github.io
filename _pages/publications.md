---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order. 
nav: true
nav_order: 3
---
<div class="hero-banner">
  <img src="{{ '/assets/img/banner-4.jpg' | relative_url }}"
       alt="A broad grassland caldera floor ringed by forested hills under a pale sky">
</div>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<p class="pub-metrics">
  563 citations, h-index 11, i10-index 12 as of November 2026, from
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>.
  Code and data links below point to the repository or archive behind each paper.
</p>

<h2 class="preprints-heading">Preprints and manuscripts under review</h2>

<div class="publications">

{% bibliography -f preprints %}

</div>

<h2 class="preprints-heading">Published work</h2>

<div class="publications">

{% bibliography %}

</div>
