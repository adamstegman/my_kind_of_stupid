---
title: Grid Layout As Bad As Table Layout?
created_at: 2010-07-17T05:06Z
---
The more I think about this, the more this statement bothers me. [@tavon][@tavon] said that grid layouts like [960 grid][960gs] are as bad as table layouts. His reasoning was that the classes are purely presentational; it's presentation affecting markup the same way tables used to.

But that's just misuse of the layouts. You shouldn't pull something massive and generic like a grid layout and not modify it to suit your website. Wouldn't you modify your reset stylesheet to match the styles your website uses? Use your existing class names instead of the presentational grid class names, and remove the classes you don't need. These third party tools are not holy relics - change them to what you need!

That doesn't mean they can't or don't affect markup inappropriately. I haven't used a grid layout, so I'm not familiar with what's required. But the generated styles aren't inherently bad, they just need to be adapted.

[@tavon]: http://twitter.com/tavon
[960gs]: http://960.gs/
