---
layout: about
title: about
permalink: /
subtitle: '<span id="typewriter"></span>'

profile:
  align: right
  image: saiganesh.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>3B 412, Karlstad University, Sweden</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Doctoral Candidate at [Karlstad University](https://www.kau.se/en),
Sweden, where I work at the intersection of geospatial science, machine learning,
and urban sustainability. My doctoral research is part of the
[DEPRIMAP project](https://sola.kau.se/deprimap/), developing scalable methods to
map and model deprived urban areas (DUAs) across the Global South, integrating
open building data, road networks, morphometrics, and supervised learning to address challenges in urban resilience and sustainable development.

Before my PhD, I spent two years as a Research Scientist at the
[National Centre for Coastal Research](http://www.nccr.gov.in) (NCCR), Government
of India, where I led UAV-based surveys, shoreline management plans, and
coastal vulnerability assessments across Tamil Nadu, Andhra Pradesh, and Kerala.
I have piloted drones across coastal areas, remote islands, and wildlife landscapes,
and built custom geospatial tools for field data collection and coastal monitoring.

My research spans urban informality, Earth Observation, remote sensing,
and environmental governance. I am a member of the
[NEOGEO Research Lab](https://www.linkedin.com/company/neogeo-karlstaduniversity)
at Karlstad University and affilaite member of [Climate AI Nordics](https://climateainordics.com/). I am currently also a core member of two ongoing projects: [DynEO4SLUMS](https://dyneo4slums.ulb.be/), [SESAC](https://sesac.se/).

Beyond research, I teach geomatics, including UAV applications, remote sensing,
digital photogrammetry, and Python for geospatial analysis. I enjoy photography,
videography, and storytelling, and I run a blog at the intersection of Earth
Observation and environmental advocacy.

<style>
@keyframes hero-gradient-light {
  from { background-color: #f8f9ff; }
  to { background-color: #eef4ff; }
}
@keyframes hero-gradient-dark {
  from { background-color: #0a0e1a; }
  to { background-color: #0a1628; }
}
.post-header {
  border-radius: 8px;
  padding: 0.5rem 0;
  animation: hero-gradient-light 6s ease-in-out infinite alternate;
}
html[data-theme="dark"] .post-header {
  animation: hero-gradient-dark 6s ease-in-out infinite alternate;
}
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .post-header {
    animation: hero-gradient-dark 6s ease-in-out infinite alternate;
  }
}
@keyframes blink-cursor {
  from, to { border-right-color: transparent; }
  50% { border-right-color: currentColor; }
}
</style>

<script>
(function () {
  var text = "Doctoral Researcher · GeoAI · Earth Observation · Machine Learning";

  function init() {
    var el = document.getElementById("typewriter");
    if (!el) return;
    var i = 0;
    el.style.borderRight = "2px solid currentColor";
    el.style.paddingRight = "2px";

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i++);
        setTimeout(type, 50);
      } else {
        el.style.animation = "blink-cursor 0.8s step-end infinite";
      }
    }
    setTimeout(type, 300);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
</script>
