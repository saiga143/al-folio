---
layout: default
title: "News: NCCR"
permalink: /news/tags/nccr/
description: News and updates related to my work at the National Centre for Coastal Research.
nav: false
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">NCCR — News & Updates</h1>
    <p class="post-description">Updates from my time at the National Centre for Coastal Research, Ministry of Earth Sciences.</p>
  </header>

  <article>
    {% assign tag_news = site.news | where_exp: "item", "item.tags contains 'nccr'" | sort: "date" | reverse %}
    {% if tag_news.size == 0 %}
      <p>No news posts found for this tag yet.</p>
    {% else %}
      <ul class="post-list">
        {% for item in tag_news %}
          <li>
            <div class="post-meta">{{ item.date | date: "%B %d, %Y" }}</div>
            <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
            {% if item.description %}
              <p>{{ item.description }}</p>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    {% endif %}
  </article>
</div>
