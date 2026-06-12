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
       alt="Contact Banner">
</div>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
