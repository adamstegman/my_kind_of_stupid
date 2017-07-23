---
title: Complex Associations with factory_girl
date: 2010-08-18T19:00Z
---
[`factory_girl`][factory_girl] is great for DRYing up test code and making tests isolated and maintainable. What it's not so great at is any [association][associations] more complicated than `has_one`/`belongs_to`. I found [a nice trick on Stack Overflow][stack_overflow] for `has_many` associations.

> The Factory.after_ hooks appear to be the only way to do this successfully.

It's a shame, because it makes it really painful to use factories. What used to be a one-line call to create whatever you need becomes writing your own factories that call `factory_girl` factories.

[associations]: http://api.rubyonrails.org/classes/ActiveRecord/Associations/ClassMethods.html
[factory_girl]: http://github.com/thoughtbot/factory_girl
[stack_overflow]: http://stackoverflow.com/questions/2937326/populating-an-association-with-children-in-factory-girl
