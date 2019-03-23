---
layout: default
---
<iframe src="https://duckduckgo.com/search.html?duck=yes&bgcolor=272822&focus=yes" style="overflow:hidden;margin:0;padding:0;width:483px;height:60px;" frameborder="0"></iframe>
<script type='text/javascript' src='https://darksky.net/widget/graph-bar/42.360082,-71.05888/us12/en.js?width=100%&height=400&title=Full Forecast&textColor=ffffff&bgColor=transparent&transparency=true&skyColor=undefined&fontFamily=Sans-Serif&customFont=&units=us&timeColor=ffffff&tempColor=ffffff&currentDetailsOption=true'></script>
{% for fav in site.data.favorites %}
* [{{ fav.title }}]({{ fav.link }})
{% endfor %}
