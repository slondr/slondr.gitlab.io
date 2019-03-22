---
title: Publications
layout: post
---

Here's a collection of works I've published.

## Articles for *The Stute*

{% for pub in site.data.stute %}
- [{{ pub.title }}]({{ pub.link }})
{% endfor %}

