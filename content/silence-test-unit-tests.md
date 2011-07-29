---
title: Silence Test::Unit tests
created_at: 2011-04-19T05:20Z
created_at_text: April 18, 2011, 11:20 pm
kind: article
---
I've written several tests that have the unfortunate side effect of writing to stdout or stderr, polluting my pretty stream of dots.

Thanks to a [post on Benevolent Code][post], I decided to silence them.

<script src="https://gist.github.com/926853.js"> </script>

Update:

The same thing in RSpec:

<script src="https://gist.github.com/926858.js"> </script>

[post]: http://benevolentcode.com/2011/03/temporarily-redirect-stdout-in-ruby/
