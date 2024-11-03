---
title: A2L Items Library
---

# A2L Items Library

<ol>

{% for item in site.items %}
  <li class="items_list"><strong>{{ item.name }}:</strong> {{ item.description }}</li>
{% endfor %}

</ol>
