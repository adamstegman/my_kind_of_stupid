webpackJsonp([0xe7b554f06909],{417:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Usually when I need documentation for a RubyGem I\'m working with, I go to <a href="http://www.rubydoc.info/gems">RubyDoc.info</a>.\nToday, however, it was not responding.\nAfter catching up on Twitter it occurred to me that I could read the documentation locally since I already had the gem installed.</p>\n<p>Running <code>gem rdoc prawn</code><sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup> generates documentation for the prawn gem.\nThen <code>gem server</code> will start a server on <code>localhost:8808</code> hosting the generated RDoc.</p>\n<p>This worked fine, but it occurred to me that starting and stopping the gem server whenever I want to see the documentation is annoying.\nOS X has the concept of <a href="https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html">launch agents</a> which can be kept alive by the operating system whenever you are logged in.\nI thought I would make a launch agent to run a gem server so that I could open it whenever I wanted.</p>\n<p>Unfortunately, running <code>gem server</code> in a default shell uses the version of Ruby that ships with OS X.\nI have gems installed in different versions of Ruby using <a href="https://github.com/postmodern/chruby">chruby</a>, and I might want to see any of them depending on what project I\'m working on.\nSo I decided to run a server for each version of Ruby I have installed (<em>except</em> the system Ruby).\nEach server runs on a different port chosen based on the Ruby version it supports.\nRuby 2.0.0 is available at <code>localhost:8200</code>, 2.1.4 is available at <code>localhost:8214</code>, and 2.2.1 is at <code>localhost:8221</code>.</p>\n<p>I wrote a script and an accompanying launch agent plist to run it and <a href="https://gist.github.com/adamstegman/76d9cb40a8a3d92ea0e6">posted them in a gist</a>.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>There was one catch to generating the documentation. I keep my <code>~/.gemrc</code> with <code>gem: --no-ri --no-rdoc</code> so that bundle installs go quickly, but in this case it was causing the <code>gem rdoc</code> command to fail. I had to remove that option to successfully generate the documentation.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',fields:{post:{title:"Launchd Gem Servers on OS X",link:null,timestamp:"2015-04-21T04:29Z",date:"April 21, 2015 4:29am UTC"}}}},pathContext:{slug:"/launchd-gem-servers-on-os-x.html"}}}});
//# sourceMappingURL=path---launchd-gem-servers-on-os-x-html-d7c584c4e26cb9c9356a.js.map