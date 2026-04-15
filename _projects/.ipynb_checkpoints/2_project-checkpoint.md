---
layout: page
title: ML/AI Solar nowcasting based on computer vision
description: End-to-end solar forecasting embedded on the Girasol Machine
img: images/2_cover.png
importance: 4
category: work
---

This project develops an end-to-end ML/AI framework for solar nowcasting (very short-term forecasting) using a real-time stream of infrared sky images from the Girasol system, enabling continuous extraction of cloud features and dynamic updating of intra-hour forecasts.

<div style="text-align:center;">
  <img src="/assets/img/workflow_solar_forecasting.jpg" width="90%">
  <p style="font-size:14px; color:#555;">
    End-to-end ML/AI pipeline for solar nowcasting using real-time infrared sky imaging and multi-sensor data fusion.
  </p>
</div>

The embedded architecture comprises three learning modules.

The first module uses physics-informed ML/AI to estimate and visualize wind velocity fields from image streams, enabling the prediction of cloud motion and Sun-occlusion events {% cite TERRENSERRANO2021116656 %}.

<div style="text-align:center;">
  <img src="/assets/img/wind_flow.pn" width="90%">
  <p style="font-size:14px; color:#555;">
    End-to-end ML/AI pipeline for solar nowcasting using real-time infrared sky imaging and multi-sensor data fusion.
  </p>
</div>

The second module employs Bayesian learning with Markov models to detect clouds and associate each wind flow with a cloud layer {% cite TERRENSERRANO2023110628 %}.

The third module applies probabilistic deep learning to fuse multi-sensor data—including sky images, weather station measurements, and pyranometer data—to generate probabilistic forecasts of solar irradiance over horizons of 1 to 15 minutes {% cite TERRENSERRANO202342 %}.

Together, these modules form a unified computational framework for accurate, real-time solar forecasting to support reliable power system operations under uncertainty.