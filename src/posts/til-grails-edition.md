---
title: TIL, Grails edition
date: 2011-07-21T17:38Z
---
I’ve unfortunately been experiencing the magic of Grails lately.

TIL:

```groovy
new JSONObject([key: []]) == new JSONObject([key: []])
```

and

```groovy
new JSONArray([]) == new JSONArray([])
```

but

```groovy
new JSONObject([key: new JSONArray([])]) != new JSONObject([key: new JSONArray([])])
```

This is so much fun.

Update: This is due to a non-implementation of `JSONArray.hashCode()`. JIRA logged here: [http://jira.grails.org/browse/GRAILS-7770][jira]

[jira]: http://jira.grails.org/browse/GRAILS-7770
