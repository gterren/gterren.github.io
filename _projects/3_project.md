---
layout: page
title: Energy Meteorology
description: Fusing information from multispectral <b><i>sky imagers</i></b> and <b><i>weather sensors</i></b> using <b><i>computer vision</i></b> and <b><i>AI/ML models</i></b> to improve solar generation nowcasting and coordinate real-time frequency response under cloud-driven irradiance variability. Rapid solar ramps caused by passing clouds create power imbalances that challenge grid reliability. This research develops sensing and forecasting technologies that provide decision support during solar ramps, enabling more efficient deployment of balancing reserves and frequency response resources. This work is built on the <b><i>Girasol Machine</i></b>, a custom multi-exposure sky imaging system, together with a public dataset that supports the development and validation of these forecasting methods. The resulting end-to-end AI/ML framework combines physics-informed, Bayesian, and probabilistic deep learning models to deliver accurate, real-time solar forecasts that support reliable power system operations under increasing renewable penetration.
img: images/3_cover.png
importance: 3
category: work
related_publications: true
display_categories: false
---

`Girasol Machine` is a sky imager with far-infrared and multi-exposure visible-light (fisheye) capabilities, mounted on a solar tracker so that the Sun remains centered in the sky images throughout the day. The imager incorporates noise-reduction software for the infrared images and an image fusion algorithm that merges fisheye sky images captured at different exposures, producing low-noise infrared circumsolar images and high-dynamic-range all-sky images every 15 seconds {% cite TERRENSERRANO2021106914 %}. The `Girasol Machine` is also equipped with a pyranometer.

The <a href='https://doi.org/10.5061/dryad.zcrjdfn9m'>Girasol dataset</a> is publicly accessible in a Dryad repository. The dataset comprises 300 sample days of multi-exposure fisheye visible-light and far-infrared sky images and irradiance measurements from the `Girasol Machine`, collected in Albuquerque, NM, USA.

<div style="text-align:center;">
  <img src="/assets/img/image_processing.jpg" width="80%">
  <p style="font-size:14px; color:#555;">
    Image processing embedded Girasol Machine: raw infrared image (left), atmospheric scatter radiation (middle), processed image (right).
  </p>
</div>

Building on this hardware, we developed advanced signal and image processing methods to extract cloud dynamics from synchronized sky images and irradiance measurements, enabling integration into solar nowcasting and intra-hour forecasting frameworks {% cite TERRENSERRANO2023111968 %}. These methods include removing cyclostationary biases in irradiance signals, stabilizing infrared radiometric measurements, and using physics-informed machine-learning models to isolate atmospheric radiation and enhance cloud feature detection, ultimately improving forecast robustness and reducing operational costs.

<div style="text-align:center;">
  <img src="/assets/img/crosssection_plane.png" width="50%">
  <p style="font-size:14px; color:#555;">
    Geospatial reprojection accounting for the curvature of the Earth as seen from the imager's viewpoint.
  </p>
</div>

We also addressed the geometric distortions inherent to ground-based sky imaging systems by developing geospatial reprojection methods that transform image-plane coordinates into atmospheric cross-sections. These reprojections, which account for the Earth's curvature, enable more accurate estimation of cloud position, motion, and spatial extent, particularly for systems mounted on solar trackers where the perspective evolves dynamically over time {% cite TERRENSERRANO2022 %}.

This project develops an end-to-end AI/ML framework for solar nowcasting (very short-term forecasting) using a real-time stream of infrared sky images from the Girasol system, enabling continuous extraction of cloud features and dynamic updating of intra-hour forecasts.

<div style="text-align:center;">
  <img src="/assets/img/workflow_solar_forecasting.jpg" width="90%">
  <p style="font-size:14px; color:#555;">
    End-to-end ML/AI pipeline for solar nowcasting using real-time infrared sky imaging and multi-sensor data fusion.
  </p>
</div>

The embedded architecture comprises three learning modules.

* `Module 1 (Physics-informed learning):` Estimates and visualizes wind velocity fields from image streams, enabling prediction of cloud motion and Sun-occlusion events {% cite TERRENSERRANO2021116656 %}.

* `Module 2 (Bayesian learning):` Detects clouds and associates each cloud with an estimated wind flow using mixture models within a Hidden Markov Model framework {% cite TERRENSERRANO2023110628 %}.

* `Module 3 (Probabilistic deep learning):` Fuses multi-sensor data—including sky images, weather station measurements, and pyranometer data—to generate probabilistic forecasts of solar irradiance over 1–15 minute horizons {% cite TERRENSERRANO202342 %}.

<div style="text-align:center;">
  <img src="/assets/img/forecast.png" width="45%">
  <p style="font-size:14px; color:#555;">
    Forecasting event (bright green), very short-term probabilistic functional forecast (green), partially observed solar radiation (black), ground-truth unobserved radiation (red), persistence forecast (gray), and deterministic functional forecast (orange).
  </p>
</div>

Together, these modules form a unified computational framework for accurate, real-time solar forecasting to support reliable power system operations under uncertainty.

This work is part of my Ph.D. dissertation at the University of New Mexico {% cite terren2022intra %}.