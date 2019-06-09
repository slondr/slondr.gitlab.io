---
layout: default
---
<iframe 
	src="https://duckduckgo.com/search.html?duck=yes&bgcolor=272822&focus=yes" 
	style="overflow:hidden;margin:0;padding:0;max-width:900px;height:60px;"
	frameborder="0">
</iframe>
{% for fav in site.data.favorites %}
* [{{ fav.title }}]({{ fav.link }})
{% endfor %}
<div id="cont_d59b9658b0ffc396f7f7cbb6f0de78ca">
	<script type="text/javascript" async src="https://www.theweather.com/wid_loader/d59b9658b0ffc396f7f7cbb6f0de78ca"></script>
</div>
