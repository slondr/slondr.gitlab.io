---
date: 2019-03-21
layout: post
slug: jekyll-markdown
title: Rendering Markdown in Jekyll Includes
---

I made this site using [Jekyll](https://jekyllrb.com/) because it integrated well with Gitlab CI and I liked the syntax. One of the things I liked about it was ease of combining HTML formatted layouts with Markdown files as posts and pages. For example, the navigation bar and the top of this page and the footer at the bottom are rendered via Liquid tags on every page. 

After a few months of casually upgrading the site, I decided to try and rewrite that navigation bar and header into Markdown. My idea was that the [layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/) should be syntax-heavy and full of HTML, Liquid, and Markdown stylings, where everything else on the site (all of the actual content) should cleanly be just Markdown with occasional small bits of HTML thrown in for simplicity. However, I, like many others berfore me, found that it wasn't so simple to combine the two big-ticket things Jekyll is known for (that is, easy including of files and easy rendering of Markdown to HTML).

As it turns out, by default with Jekyll you can either include a file into a rendered Markdown document or render a file as Markdown, *but not both*. My initial attempt left me with a broken navigation bar and footer that was plainly showing the Markdown syntax rather than my intended compiled HTML upon viewing.

This was a surprisingly non-trivial problem to fix. Initial googling led me to [this Github issue at Jekyll](https://github.com/jekyll/jekyll/issues/1303), which describes my exact problem. The issue was posted in July of 2013 and there was still discussion on it as of this month. The reccomended solution, which I also found mirrored in an accepted answer to [this StackOverflow question](https://stackoverflow.com/questions/27771508/showing-markdown-content-in-a-div), was to make a custom capture command like this:

```liquid
{% raw %}
{% capture navbar %}{% include navbar.md %}{% endcapture %}
{{ navbar | markdownify }}
{% endraw %}
```

Unfortunately this also didn't work. I originally had my navigation bar and footer defined as a layout called "raw" which included no additional formatting. When I applied the reccomended fix above, the [front matter](https://jekyllrb.com/docs/front-matter/) of the layout was getting rendered incorrectly as Markdown, causing horizontal lines and broken JSON appearing on-screen, but the actual content of the header and footer were still appearing as raw syntax! Getting rid of the front matter didn't help, as now nothing was being rendered as Markdown at all.

At this point I was legitimately stumped. I had the idea that maybe the Markdown wasn't being rendered because it was inside of a div tag in the `.md` file (or a `<footer>` tag in the case of the footer). So as an experiment, I moved the div and footer tags to the (unrendered) layout file for each layout and made the navigation bar/footer files raw Markdown.

Voila!

![Footer rendered correctly!](https://i.imgur.com/fsIAaDK.png)

So for everyone else who has this issue, the secret is not only to use the custom capture instead of a normal Liquid include tag, but also to make sure that your Markdown included file isn't embedded within any HTML tags or it wont render properly. I hope that eventually Jekyll can sort this out and provide a cleaner native solution, but this system works pretty well for now so I'm satisifed.
