---
title: Favorites
layout: default
---

{% for fav in site.data.favorites %}
* [{{ fav.title }}]({{ fav.link }})
{% endfor %}
