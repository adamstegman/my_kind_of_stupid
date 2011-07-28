---
title: onclick is Your Friend
link: http://thenerdary.net/articles/entry/onclick-is-your-friend
created_at: 2010-06-21T23:00Z
created_at_text: June 21, 2010, 6:00 pm
kind: article
---
Mark asserts that while using onclick is frowned upon, it's faster and cleaner:

> Sure it makes your XHTML a bit longer, but that’s one less selector jQuery has to parse and one less DOMReady function
> your browser has to kick off.

That's *true*, but it comes at the cost of maintainability. Putting the jQuery example he provided into an external file makes it easier to maintain by having all the JavaScript in predictable and findable places.

Additionally, that performance hit can be mitigated by using progressive enhancement to give the entire page functionality immediately, then asynchronously loading the JavaScript to enhance it. Asynchronously loading your JS may or may not even be necessary, depending on your JS payload.

Using inline code like this isn't necessary for most people; they just make your code harder to read.