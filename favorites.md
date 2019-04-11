---
layout: default
---
<iframe src="https://duckduckgo.com/search.html?duck=yes&bgcolor=272822&focus=yes" style="overflow:hidden;margin:0;padding:0;width:483px;height:60px;" frameborder="0"></iframe>
{% for fav in site.data.favorites %}
* [{{ fav.title }}]({{ fav.link }})
{% endfor %}
