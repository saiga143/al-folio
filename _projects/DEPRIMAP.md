---
layout: page
title: DEPRIMAP
description: Unraveling the dynamics of deprived urban areas in the Majority World using AI and Earth Observation to foster evidence-based sustainable planning
img: assets/img/logos/deprimap.png
importance: 1
category: research
related_publications: false
---

<a href="https://sola.kau.se/deprimap/" target="_blank" rel="noopener noreferrer" class="btn mt-3 d-block" style="background-color: var(--global-theme-color); color: white; width: 50%; font-size: 1rem; padding: 0.6rem 1rem;">
  <i class="fa-solid fa-globe"></i> Project Website
</a>

---

## Context

Deprived Urban Areas (DUAs) are neighborhoods where overcrowding, inadequate infrastructure, and limited access to services undermine daily life. While slums are one form of DUA, deprivation also occurs in other urban settings such as poorly serviced housing estates and rapidly expanding peri-urban areas. These communities are often located in high-risk zones and lack protective infrastructure, making them disproportionately exposed to climate hazards such as floods and heatwaves.

Despite their scale, projected to exceed 2 billion people by 2030, DUAs remain poorly represented in global datasets and urban planning systems. Many censuses are outdated or exclude informal settlements / slums, and existing global population products capture only a fraction of these populations. This data gap limits our ability to accurately assess climate risk and design targeted adaptation strategies.

---

## What DEPRIMAP Does

DEPRIMAP is structured as a three-phase framework to systematically analyze urban deprivation and its climate implications.

**Phase I** – Mapping: Identify deprived urban areas using geospatial indicators derived from satellite data and other spatial data sources, capturing patterns of building density, layout, and infrastructure.

**Phase II** – Population: Estimate how many people live in these areas by integrating mapped extents with bottom-up spatial population modelling approaches.

**Phase III** – Vulnerability: Assess how exposed these populations are to climate hazards such as floods and heatwaves by combining deprivation maps with spatial hazard data.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/deprimapphases.png" title="DEPRIMAP phases" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

---

## Technical Approach

DEPRIMAP combines Earth Observation data with machine learning to analyze urban environments at neighborhood scale. The framework integrates globally available datasets on buildings, roads, land cover, and derives spatial indicators that capture urban form and infrastructure conditions. These features are used within supervised learning models to identify patterns associated with urban deprivation. Designed for scalability, the approach can be applied consistently across thousands of cities, enabling comparable assessments in data-scarce regions.

---

## Research Outputs

<div class="publications">
  {% bibliography --query @*[projects~=deprimap] %}
</div>

---

## Funder information

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/deprimapfunding.png" title="DEPRIMAP funder" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
