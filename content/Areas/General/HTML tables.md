---
date: 2024-05-23
tags:
  - atomic
topics:
  - "[[html|html]]"
themes: 
references:
  - "[[Colt Steele - Udemy - Webdev complete 2024|Colt Steele - Udemy - Webdev complete 2024]]"
---
HTML tables use `<th>` to indicate a table header and `<td>` to indicate a table cell - these cells should be wrapped in a row tag (`<tr>`) Table headers should be wrapped in the `<theader>` tags and the other content cells should be wrapped in the `<tbody>` tags. This is used mainly for readability.

To have a shared header (a header that spans multiple subheaders), they need to be put in a new row. You then give it the property of  rowspan to span multiple columns (as many as needed).
