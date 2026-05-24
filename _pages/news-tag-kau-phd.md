---
layout: default
title: "News: KAU PhD"
permalink: /news/tags/kau-phd/
description: News and updates related to my PhD at Karlstad University.
nav: false
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">KAU PhD — News & Updates</h1>
    <p class="post-description">Updates from my doctoral research and other projects during my tenure at Karlstad University.</p>
  </header>

  <article>
    {% assign tag_news = site.news | where_exp: "item", "item.tags contains 'kau-phd'" | sort: "date" | reverse %}
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
