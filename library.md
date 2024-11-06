---
layout: default
---

<h1>A2L Items Library</h1>

<p><em>002</em></p>

<h2>List items by keyword:</h2>

<script src="{{ '/assets/js/dropdown.js' | relative_url }}"></script>

<form id="tag-dropdown" onsubmit="navigateToTag(); return false;">
  <select id="tag-select">
    <option value="">-- choose a keyword --</option>
    {% for tag in site.tags %}
      <option value="{{ tag.url | absolute_url }}">{{ tag.name }}</option>
    {% endfor %}
  </select>
  <button type="submit">Show</button>
</form>

<h2>All items:</h2>

<ul>

{% for item in site.items %}
  <li class="items_list"><strong><a href="{{ item.url | relative_url }}">{{ item.name }}</a></strong>: {{ item.description }}{% if item.keywords %} (<em>{{ item.keywords }}</em>){% endif %}</li>
{% endfor %}

</ul>
