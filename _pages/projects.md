---
layout: page
title: projects
permalink: /projects/
description: Research and academic projects spanning geospatial science, urban sustainability, civil engineering, and more.
nav: true
nav_order: 2
horizontal: false
toc:
  sidebar: right
---

<div class="projects">

  <!-- Research Projects -->
  <a id="research-projects" href=".#research-projects">
    <h2 class="category">Research Projects</h2>
  </a>
  {% assign research_projects = site.projects | where: "category", "research" | sort: "importance" %}
  {% if research_projects.size > 0 %}
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in research_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% else %}
    <p class="text-muted">No research projects yet.</p>
  {% endif %}

  <!-- Academic Projects -->
  <a id="academic-projects" href=".#academic-projects">
    <h2 class="category" style="margin-top: 2rem;">Academic Projects</h2>
  </a>

  <p class="mt-2 mb-4">I have completed numerous projects as part of my bachelor's and master's degrees, hackathons, and on my own over the years. Below is the list of all such projects categorized into appropriate themes.</p>

{% assign academic_cats = "gis-rs,civil-engineering,sociology" | split: "," %}
{% assign academic_labels = "GIS & Remote Sensing for Urban Planning,Civil Engineering,Sociology" | split: "," %}

{% for i in (0..2) %}
{% assign cat = academic_cats[i] %}
{% assign label = academic_labels[i] %}
{% assign cat_projects = site.projects | where: "category", cat | sort: "importance" %}
{% if cat_projects.size > 0 %}
<a id="{{ cat }}" href=".#{{ cat }}">
<h3 class="mt-4 mb-3" style="font-size: 1.25rem; font-weight: 600; color: var(--global-text-color);">{{ label }}</h3>
</a>
<div class="row row-cols-1 row-cols-md-2">
{% for project in cat_projects %}
{% include projects.liquid %}
{% endfor %}
</div>
{% endif %}
{% endfor %}

</div>
