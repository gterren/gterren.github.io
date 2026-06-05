---
layout: page
title: Energy Meteorology
description: Information fusion from multi-spectral sky imagers and weather sensors, using computer vision and deep learning, to improve solar generation nowcasting and coordinate real-time frequency response during cloud-driven variability in the generation.
img: images/3_cover.png
importance: 3
category: work
related_publications: true
display_categories: false
---

`Girasol Machine` is a sky imager with far-infrared and multi-exposure capabilities in visible light (fisheye), mounted on a solar tracker so that the Sun remains centered in the sky images throughout the day. The sky imager has a noise-reduction software for the infrared images and an image fusion algorithm to merge fisheye sky images with different exposures. It produces low-noise infrared circumsolar images and high-dynamic-range all-sky images every 15 seconds {% cite TERRENSERRANO2021106914 %}. The `Girasol Machine` is equipped with a pyranometer.

The <a href='https://doi.org/10.5061/dryad.zcrjdfn9m'>Girasol dataset</a> is publicly accessible in a Dryad repository. The dataset comprises 300 sample days of multi-exposure fisheye visible-light and far-infrared sky images and irradiance measurements from the `Girasol Machine`, collected in Albuquerque, NM, USA.

<div style="text-align:center;">
  <img src="/assets/img/image_processing.jpg" width="80%">
  <p style="font-size:14px; color:#555;">
    Image processing embedded `Girasol Machine`: raw infrared image (left), atmospheric scatter radiation (middle), processed image (right).
  </p>
</div>

Building on this hardware, we developed advanced signal and image processing methods to extract cloud dynamic features from synchronized sky images and irradiance measurements, enabling their integration into solar nowcasting and intra-hour forecasting frameworks {% cite TERRENSERRANO2023111968 %}. These methods include removing cyclostationary biases in irradiance signals, stabilizing infrared radiometric measurements, and using physics-informed machine-learning models to isolate atmospheric radiation and enhance cloud feature detection, ultimately improving forecast robustness and reducing operational costs.

<div style="text-align:center;">
  <img src="/assets/img/crosssection_plane.png" width="50%">
  <p style="font-size:14px; color:#555;">
    Geospatial reprojections to account for the curvature of the Earth from the image's perspective from the viewpoint. 
  </p>
</div>

We also addressed the geometric distortions inherent to ground-based sky imaging systems by developing geospatial reprojection methods that transform image-plane coordinates into atmospheric cross-sections. These reprojections to account for the Earth's curvature enable more accurate estimation of cloud position, motion, and spatial extent, particularly for systems mounted on solar trackers where perspective evolves dynamically over time {% cite TERRENSERRANO2022 %}

This work is part of my Ph.D. dissertation at the University of New Mexico.


