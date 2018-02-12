webpackJsonp([40847542162811],{403:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Rails\' ActiveRecord has a nifty <code>#destroy</code> method that almost everyone already knows about. The documentation for <code>#destroy</code><sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup> helpfully states</p>\n<blockquote>\n<p>Deletes the record in the database and freezes this instance to reflect that no changes should be made (since they\ncan’t be persisted).</p>\n</blockquote>\n<p>What is less clear is how it works when you call it on a relationship. To be sure, it destroyed the database record. What it also unfortunately does it hangs on to the reference in the parent object.</p>\n<p>Let\'s throw down with some sample code.</p>\n<pre><code>class Thing &#x3C; ActiveRecord::Base\n  has_one :child\nend\n\nclass Child &#x3C; ActiveRecord::Base\n  belongs_to :thing\nend\n\nzengarden> thing = Thing.new\n=> #&#x3C;Thing id: nil, name: nil, created_at: nil, updated_at: nil>\nzengarden> thing.save\n=> true\nzengarden> thing.create_child :name => "Child"\n=> #&#x3C;Child id: 4, name: "Child", thing_id: 1,...>\nzengarden> thing.child\n=> #&#x3C;Child id: 4, name: "Child", thing_id: 1...>\nzengarden> thing.child.destroy\n=> #&#x3C;Child id: 4, name: "Child", thing_id: 1...>\nzengarden> thing.child\n=> #&#x3C;Child id: 4, name: "Child", thing_id: 1...>\n</code></pre>\n<p>Arg. I just destroyed it! I don\'t want it hanging around in my cache. If I really wanted to save it, I should have saved it before or during the destroy call. I can of course invalidate my cache by calling</p>\n<pre><code>thing.child(true)\n</code></pre>\n<p>which correctly returns nil. But if I don\'t know to do that immediately after the destroy, I get errors like</p>\n<blockquote>\n<p>TypeError: can\'t modify frozen hash</p>\n</blockquote>\n<p>because code used later naïvely calls</p>\n<pre><code>if thing.child\n  thing.child.attributes = new_attributes\nend\n</code></pre>\n<p>expecting that if a child exists, it should be updated.</p>\n<p>For the sake of argument, let\'s say that maybe the behavior isn\'t so bad, maybe this is what people expect or could use. In that case, what a terrible error message. I\'m not familiar enough with the Associations internals to suggest where a better one could be injected, but something along the lines of</p>\n<blockquote>\n<p>Can\'t modify a destroyed record</p>\n</blockquote>\n<p>would be miles better.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Rails 3 - <a href="http://railsapi.com/doc/rails-v3.0.0/classes/ActiveRecord/Persistence.html#M001019">http://railsapi.com/doc/rails-v3.0.0/classes/ActiveRecord/Persistence.html#M001019</a>\nRails 2.3.8 - <a href="http://railsapi.com/doc/rails-v2.3.8/classes/ActiveRecord/Base.html#M001111">http://railsapi.com/doc/rails-v2.3.8/classes/ActiveRecord/Base.html#M001111</a></p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',fields:{post:{title:"ActiveRecord Hangs On to Destroyed Relations",link:null,timestamp:"2010-10-25T18:31Z",date:"October 25, 2010 6:31pm UTC"}}}},pathContext:{slug:"/activerecord-hangs-on-to-destroyed-relations.html"}}}});
//# sourceMappingURL=path---activerecord-hangs-on-to-destroyed-relations-html-ad057e7b9167dbdaa3af.js.map