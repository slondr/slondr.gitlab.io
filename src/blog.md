---
title: Blog
layout: post
blog_index: true
---
{% for post in site.posts %}
{% if post.draft != true %}
- <div class="post-date"><i>{{ post.date | date: '%B %-d, %Y' }}</i></div>
  [{{ post.title }}]({{ post.url }})
{% endif %}
{% endfor %}
