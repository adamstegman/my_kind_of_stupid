---
title: ActiveRecord Hangs On to Destroyed Relations
created_at: 2010-10-25T18:31Z
---
Rails' ActiveRecord has a nifty `#destroy` method that almost everyone already knows about. The documentation for `#destroy`[^1] helpfully states

> Deletes the record in the database and freezes this instance to reflect that no changes should be made (since they
> can’t be persisted).

What is less clear is how it works when you call it on a relationship. To be sure, it destroyed the database record. What it also unfortunately does it hangs on to the reference in the parent object.

Let's throw down with some sample code.

    class Thing < ActiveRecord::Base
      has_one :child
    end

    class Child < ActiveRecord::Base
      belongs_to :thing
    end

    zengarden> thing = Thing.new
    th=> #<Thing id: nil, name: nil, created_at: nil, updated_at: nil>
    zengarden> thing.save
    => true
    zengarden> thing.create_child :name => "Child"
    => #<Child id: 4, name: "Child", thing_id: 1,...>
    zengarden> thing.child
    => #<Child id: 4, name: "Child", thing_id: 1...>
    zengarden> thing.child.destroy
    => #<Child id: 4, name: "Child", thing_id: 1...>
    zengarden> thing.child
    => #<Child id: 4, name: "Child", thing_id: 1...>

Arg. I just destroyed it! I don't want it hanging around in my cache. If I really wanted to save it, I should have saved it before or during the destroy call. I can of course invalidate my cache by calling

    thing.child(true)

which correctly returns nil. But if I don't know to do that immediately after the destroy, I get errors like

> TypeError: can't modify frozen hash

because code used later naïvely calls

    if thing.child
      thing.child.attributes = new_attributes
    end

expecting that if a child exists, it should be updated.

For the sake of argument, let's say that maybe the behavior isn't so bad, maybe this is what people expect or could use. In that case, what a terrible error message. I'm not familiar enough with the Associations internals to suggest where a better one could be injected, but something along the lines of

> Can't modify a destroyed record

would be miles better.

[^1]: Rails 3 - [http://railsapi.com/doc/rails-v3.0.0/classes/ActiveRecord/Persistence.html#M001019][rails3]
      Rails 2.3.8 - [http://railsapi.com/doc/rails-v2.3.8/classes/ActiveRecord/Base.html#M001111][rails2]

[rails3]: http://railsapi.com/doc/rails-v3.0.0/classes/ActiveRecord/Persistence.html#M001019
[rails2]: http://railsapi.com/doc/rails-v2.3.8/classes/ActiveRecord/Base.html#M001111
