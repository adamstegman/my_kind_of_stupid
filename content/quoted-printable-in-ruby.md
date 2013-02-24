---
title: Quoted-printable in Ruby
created_at: 2011-02-10T03:31Z
created_at_text: February 9, 2011, 9:31 pm
kind: article
---
I'm working on reading emails sent from ActionMailer, and was noticing the weird form of what I thought was URL-encoding in an HTML section of a multipart email, e.g.

    <html lang=3D"en">

I also noticed the line length and endings:

> blah blah &#8230; blah bl=  
> ah blah blah

I shrugged these off as quirks of ActionMailer or SMTP and moved on to removing/decoding them.

Two hours later, when googling for info about them because they didn't seem consistent, I stumbled across [Quoted-printable encoding][quoted_printable]. I recognized it from the headers in the email, and wondered if someone had written a gem or something to decode it. Then I find [this][unpack] - String#unpack was able to do it for me all along.

It's great that Ruby (and sometimes Rails) can do things like this out of the box. I just wish I was smart enough to look.

[quoted_printable]: http://en.wikipedia.org/wiki/Quoted-printable
[unpack]: http://rubydoc.info/stdlib/core/1.8.7/String#unpack-instance_method
