---
title: Launchd Gem Servers on OS X
created_at: 2015-04-21T04:29Z
created_at_text: April 20, 2015 9:29pm
kind: article
---
Usually when I need documentation for a RubyGem I'm working with, I go to [RubyDoc.info][].
Today, however, it was not responding.
After catching up on Twitter it occurred to me that I could read the documentation locally since I already had the gem installed.

Running `gem rdoc prawn`[^1] generates documentation for the prawn gem.
Then `gem server` will start a server on `localhost:8808` hosting the generated RDoc.

This worked fine, but it occurred to me that starting and stopping the gem server whenever I want to see the documentation is annoying.
OS X has the concept of [launch agents][] which can be kept alive by the operating system whenever you are logged in.
I thought I would make a launch agent to run a gem server so that I could open it whenever I wanted.

Unfortunately, running `gem server` in a default shell uses the version of Ruby that ships with OS X.
I have gems installed in different versions of Ruby using [chruby][], and I might want to see any of them depending on what project I'm working on.
So I decided to run a server for each version of Ruby I have installed (*except* the system Ruby).
Each server runs on a different port chosen based on the Ruby version it supports.
Ruby 2.0.0 is available at `localhost:8200`, 2.1.4 is available at `localhost:8214`, and 2.2.1 is at `localhost:8221`.

I wrote a script and an accompanying launch agent plist to run it and [posted them in a gist][gist].

[^1]: There was one catch to generating the documentation. I keep my `~/.gemrc` with `gem: --no-ri --no-rdoc` so that bundle installs go quickly, but in this case it was causing the `gem rdoc` command to fail. I had to remove that option to successfully generate the documentation.

[chruby]: https://github.com/postmodern/chruby
[gist]: https://gist.github.com/adamstegman/76d9cb40a8a3d92ea0e6
[launch agents]: https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[RubyDoc.info]: http://www.rubydoc.info/gems
