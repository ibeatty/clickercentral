---
layout: default
---

<h1>A2L Items Library</h1>

<h2>List items by keyword:</h2>

{% include tag-dropdown.html %}

<h2>All items:</h2>

<ul>
{% for item in site.items %}
  <li class="items_list"><strong><a href="{{ item.url | relative_url }}">{{ item.name }}</a></strong>: {{ item.description }}{% if item.keywords %} (<em>{{ item.keywords }}</em>){% endif %}</li>
{% endfor %}
</ul>
