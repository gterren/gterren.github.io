---
layout: page
title: AI/ML Solar Nowcasting Based on Computer Vision
description: End-to-end solar nowcasting embedded pipeline within the Girasol Machine, based on computer vision to fuse multi-sensor data for very short-term solar radiation forecasting
img: images/2_cover.png
importance: 4
category: work
---

This project develops an end-to-end AI/ML framework for solar nowcasting (very short-term forecasting) using a real-time stream of infrared sky images from the Girasol system, enabling continuous extraction of cloud features and dynamic updating of intra-hour forecasts.

<div style="text-align:center;">
  <img src="/assets/img/workflow_solar_forecasting.jpg" width="90%">
  <p style="font-size:14px; color:#555;">
    End-to-end ML/AI pipeline for solar nowcasting using real-time infrared sky imaging and multi-sensor data fusion.
  </p>
</div>

The embedded architecture comprises three learning modules.

* `Module 1 (Physics-informed learning):` Estimates and visualizes wind velocity fields from image streams, enabling prediction of cloud motion and Sun-occlusion events {% cite TERRENSERRANO2021116656 %}.

* `Module 2 (Bayesian learning):` Detects clouds and associates each cloud to an estimated wind flow using mixture models in a Hidden Markov Chain {% cite TERRENSERRANO2023110628 %}.

* `Module 3 (Probabilistic deep learning):` Fuses multi-sensor data—including sky images, weather station measurements, and pyranometer data to generate probabilistic forecasts of solar irradiance over 1–15 minute horizons {% cite TERRENSERRANO202342 %}.

<div style="text-align:center;">
  <img src="/assets/img/forecast.png" width="45%">
  <p style="font-size:14px; color:#555;">
    Forecasting event (bright green), very short-term probabilistic functional forecast (green), partially observed solar radiation (black), ground-truth unobserved radiation (red), persistence forecast (gray), and deterministic functional forecast orange.
  </p>
</div>

Together, these modules form a unified computational framework for accurate, real-time solar forecasting to support reliable power system operations under uncertainty.

This work is part of my Ph.D. dissertation at the University of New Mexico.