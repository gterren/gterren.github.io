---
layout: page
permalink: /repositories/
title: Software & Data
description: open-source code, models, and datasets behind the papers.
nav: true
nav_order: 5
---
<div class="hero-banner">
  <img src="{{ '/assets/img/banner-6.jpg' | relative_url }}"
       alt="The Rio Grande cutting through a basalt gorge on the high desert plateau, northern New Mexico">
</div>

## Data and models

<div class="row row-cols-1 row-cols-md-2 data-cards">

  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="images/gridpath_india_framework.png" class="card-img-top" alt="Flow diagram of the GridPath-India modeling framework: demand projections and VRE, hydro, thermal and transmission availability factors feeding a capacity expansion model, with capacity credit and ELCC feedback, and a production cost model for economic dispatch" %}
      <div class="card-body">
        <h3 class="card-title">GridPath-India</h3>
        <p class="card-text">
          Capacity expansion and production cost model of India's electricity system, built on the
          open-source GridPath platform. 34 load zones plus Bhutan, interstate transmission, and
          hourly demand from linearly scaled and bottom-up profiles, with investment and
          operations optimized across planning periods from 2020 to 2050. Includes more than 1,300
          candidate wind and solar sites and project-level capacity factors.
        </p>
        <p class="card-source">
          <a class="stretched-link" href="https://doi.org/10.5061/dryad.dz08kpsbm">Dryad</a>
          &middot; 10.5061/dryad.dz08kpsbm
        </p>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="images/girasol_sky_images.jpg" class="card-img-top" alt="Girasol sky images in four columns at different times: a short visible exposure, a long visible exposure, and the matching longwave infrared frame beneath" %}
      <div class="card-body">
        <h3 class="card-title">Girasol</h3>
        <p class="card-text">
          A sky imaging and global solar irradiance dataset. Longwave infrared and
          multi-exposure visible-light sky images with matching pyranometer measurements, recorded
          every 15 seconds by the Girasol Machine on a solar tracker, for intra-hour solar
          forecasting.
        </p>
        <p class="card-source">
          <a class="stretched-link" href="https://doi.org/10.5061/dryad.zcrjdfn9m">Dryad</a>
          &middot; 10.5061/dryad.zcrjdfn9m<br>
          <a class="over-link" href="https://doi.org/10.1016/j.dib.2021.106914">Data in Brief</a>
          &middot; 10.1016/j.dib.2021.106914
        </p>
      </div>
    </div>
  </div>

</div>

<style>
  .data-cards a { color: inherit; text-decoration: none; }
  .data-cards .card-source a { text-decoration: underline; text-underline-offset: 2px; }
  .data-cards .over-link { position: relative; z-index: 2; }
  .data-cards .card-img-top { aspect-ratio: 16 / 9; object-fit: cover; width: 100%; }
  .data-cards .card-title { margin-bottom: .5rem; }
  .data-cards .card-source {
    margin: .75rem 0 0;
    font-size: .8rem;
    letter-spacing: .03em;
    color: var(--global-text-color-light);
  }
</style>

{% if site.data.repositories.github_repos %}

## Code repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
