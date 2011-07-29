---
title: TIL, Grails edition
created_at: 2011-07-21T17:38Z
created_at_text: July 21, 2011, 10:38 pm
kind: article
---
I’ve unfortunately been experiencing the magic of Grails lately.

TIL:

    new JSONObject([key: []]) == new JSONObject([key: []])

and

    new JSONArray([]) == new JSONArray([])

but

    new JSONObject([key: new JSONArray([])]) != new JSONObject([key: new JSONArray([])])

This is so much fun.

Update: This is due to a non-implementation of `JSONArray.hashCode()`. JIRA logged here: [http://jira.grails.org/browse/GRAILS-7770][jira]

[jira]: http://jira.grails.org/browse/GRAILS-7770
