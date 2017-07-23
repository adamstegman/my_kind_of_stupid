---
title: Test-Driven Drudgery
date: 2011-01-05T21:56Z
---
I'll admit it. I hate test-driven development while I'm actually doing it. It's boring and tedious. I get lost in details while trying to get some test to work. Maybe I just need to do more [katas][], but it gets old fast.

Katas make it look so nice and easy. You just think of the right test, write it, and make it pass. But in practice I have a much bigger picture in mind that I want to implement, and I just can't limit myself to building it one atom at a time, or I'll lose it. Sometimes, I just want to hack.

So I can sympathize when I see people writing a bunch of code to get some massive feature ready, and then filling in tests at the end. But it's wrong. It seems harmless ("I'm still testing, right?") because the difference can be subtle. Writing tests after the fact means you're writing your tests to fit your code, instead of the other way around. You're trying to achieve that code coverage metric instead of thinking hard about each feature, branch, and interface.

Just like writing code without TDD, it can often work just fine. But it's not scalable and it results in poorly-tested and/or poorly-written code.

I'm not just preaching, I live this dilemma every day. TDD sucks, but man, does it ever improve the quality of my code.

Sometimes I just hack. But most of the time, I drop in TODO's where I need to remember a big picture and get to testing first.

[katas]: http://thecleancoder.blogspot.com/2010/10/craftsman-62-dark-path.html
