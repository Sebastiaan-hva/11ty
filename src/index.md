---
title: My first page
layout: base.njk
templateEngineOverride: njk,md
---

## Blog Posts

{% for post in collections.posts %}
{{ post.data.title }}
{% endfor %}

{% include "postlist.njk" %}

hi

<img src="{{ catpic }}" alt="Random cat" style="max-width: 100%;">
