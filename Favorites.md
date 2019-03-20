---
title: Favorites
layout: post
---

<ul>
	{% for fav in site.data.favorites %}
	<li>[{{ fav.title }}]({{ fav.link}})</li>
	{% endfor %}
</ul>
