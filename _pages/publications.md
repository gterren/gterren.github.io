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

<h2 class="preprints-heading">Preprints and manuscripts under review</h2>

<div class="publications">

{% bibliography -f preprints %}

</div>

<h2 class="preprints-heading">Published work</h2>

<div class="publications">

{% bibliography %}

</div>
