---
title: Read Link Later Works With New Twitter
link: https://chrome.google.com/extensions/detail/mffbgadohiiggcibdgmogfdlmackfbhm
created_at: 2010-10-20T12:27Z
created_at_text: August 20, 2010, 7:27 am
kind: article
---
Version 1.1.0 of Read Link Later now works with New Twitter. Rejoice!

Sorry for the delay. New Twitter came to me at a bad time, where I didn't have the time to devote to updating Read Link Later. Fortunately, we're in business now!

The only issue is that the New Twitter uses their own API through JavaScript, so I don't have a way of knowing when a tweet is loaded. To work around this, I look for new tweets to add the Read Later links to every 100 ms. If I could hack in a custom event, that would be something.
