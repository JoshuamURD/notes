---
date: {{date}}
tags:
  - Journal
themes: 
topics:
---

```dataview
CALENDAR file.day
FROM "Journal"
where file.day
```

# Reflection


---
# Tasks
- 

# Dataview queries
## Task management

> [!EXAMPLE]+ Tasks
> ```dataview 
> TASK 
> FROM ""
> WHERE !completed AND !checked
> GROUP BY section
> ```


> [!important]+ Tasks due in next 10 days
> ```dataview 
> TABLE WITHOUT ID 
> regexreplace(Tasks.text, "\[.*$", "") AS Task, 
> Tasks.due AS "Due Date", 
> durationformat(dur(Tasks.due - date(now) + dur(1 day)), "d 'days left'") AS "Days until due", 
> Tasks.priority AS "Priority", 
> Tasks.section AS "File" 
> FROM "Work log" 
> WHERE file.tasks
> FLATTEN file.tasks AS Tasks
> WHERE Tasks.completed=false and Tasks.due and (Tasks.due <= date(today) + dur(10 day))
> Sort Tasks.due ASCENDING
> ```

## Resurfacing

> [!IMPORTANT]- Journal entries 1 month ago
> ```dataview
> TABLE WITHOUT ID
> dateformat(date(file.name), "cccc, dd MMMM yyyy") as "Date",
> file.link as "Link"
> FROM "Journal"
> WHERE date(file.name) < this.file.day - dur(30 day)
> SORT date(file.name) DESC
> limit 10
> ```

## Recent activity

> [!NOTE]+ Created today
> ```dataview
> LIST
> FROM ""
> WHERE file.cday=this.file.day
> ```

> [!NOTE]- Recently created
> ```dataview 
> TABLE WITHOUT ID
> file.link AS "Recently created files",
> file.cday AS "Created"
> FROM "Areas"
> WHERE file.cday >= date(today) - dur(10 days)
> SORT file.cday DESC
> ```

> [!NOTE]- Recently modified
> ```dataview
> TABLE WITHOUT ID
> file.link AS "Recently modified files",
> file.mtime AS "Modified"
> FROM ""
> WHERE file.mtime >= date(today) - dur(10 days)
> SORT file.mtime DESC
> ```
