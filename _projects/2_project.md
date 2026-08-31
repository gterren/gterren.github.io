---
layout: page
title: Day-Ahead Scheduling and Operating Reserves
description: Improving probabilistic day-ahead energy forecasts by integrating numerical weather predictions with <b><i>AI/ML models</i></b>, and reducing the computational complexity of <b><i>stochastic unit commitment</i></b> and <b><i>economic dispatch</i></b> models through scenario selection to mitigate <b><i>energy curtailment</i></b>, <b><i>load shedding</i></b>, and price volatility. The goal is to dynamically determine operating reserve requirements by quantifying forecast uncertainty, thereby supporting ancillary service procurement and headroom allocation in unit commitment decisions. 
img: images/2_cover.png
importance: 2
category: work
giscus_comments: false
related_publications: true
display_categories: false
---

<h4><b>Stochastic Unit Commitment and Economic Dispatch</b></h4>

We introduced a methodology that leverages statistical functional depth metrics to identify the most operationally risky scenarios—those likely to result in high generation costs, reserve shortfalls, load shedding, or renewable curtailment {% cite TERRENSERRANO2025125747 %}. Screening probabilistic scenarios before they enter stochastic unit commitment and economic dispatch models reduces their computational burden while preserving the risk information most relevant to grid operations. This work is conducted as part of the <a href='https://orfeus.princeton.edu'>ORFEUS team</a> at Princeton University, within the ARPA-E PERFORM program, and was presented at the <a href='https://www.arpae-summit.com'>2024 ARPA-E Energy Innovation Summit</a>.

<iframe src="/assets/pdf/ARPAE2024_poster.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/pdf/ARPAE2024_poster.pdf">Download PDF</a>
</iframe>

<h4><b>Probabilistic Day-Ahead Energy Forecast</b></h4>

We developed a fully probabilistic day-ahead joint forecast of wind and solar electricity generation and demand, published in <a href='https://www.nature.com/articles/s41467-026-69015-w'>Nature Communications</a> {% cite terren2026probabilistic %}. Applied to the three zones of the California Independent System Operator, the best-performing model improves forecast skill by 25% relative to current benchmarks, and forecasts based on joint probability distributions enable a more effective allocation of operating reserves than conventional deterministic approaches. The corresponding <a href='https://github.com/gterren/caiso_power'>software</a> and <a href='https://github.com/gterren/caiso_power_viz'>visualization tools</a> are publicly available on GitHub.

{% include figure.liquid loading="eager" path="images/flyer.png" title="Day-ahead demand forecast" class="img-fluid rounded z-depth-1" %}

This work was supported by my 2023 CNSI Climate Innovation Fellowship at the University of California, Santa Barbara. We presented it at the 2024 Macro-Energy Systems Workshop at Princeton University, the 2025 IEEE PES Grid Edge Technologies <a href='https://ieeexplore.ieee.org/abstract/document/10887459'>Conference & Exposition</a> in San Diego {% cite TERRENSERRANO2025 %}, and the ESIG 2025 Forecasting & Markets Workshop in Nashville.

<iframe src="/assets/pdf/MES2024_poster.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/pdf/MES2024_poster.pdf">Download PDF</a>
</iframe>

<iframe src="/assets/pdf/ESIG2025_presentation.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/pdf/ESIG2025_presentation.pdf">Download PDF</a>
</iframe>
