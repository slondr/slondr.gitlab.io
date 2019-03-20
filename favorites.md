---
title: Favorites
layout: post
---

{% for fav in site.data.favorites %}
* [{{ fav.title }}]({{ fav.link }})
{% endfor %}
