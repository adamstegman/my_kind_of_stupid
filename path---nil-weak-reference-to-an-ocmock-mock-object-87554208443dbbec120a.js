webpackJsonp([0x70dd9215be4b],{420:function(n,a){n.exports={data:{markdownRemark:{html:'<p>While I was working on unit tests for <a href="http://adamstegman.com/projects/git-push.html">Git Push</a>, I wanted to mock my\ndelegate so I could create an expectation. So I used <a href="http://ocmock.org/">OCMock</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-objectivec"><code>id delegate <span class="token operator">=</span> <span class="token punctuation">[</span>OCMockObject mockForProtocol<span class="token punctuation">:</span><span class="token keyword">@protocol</span><span class="token punctuation">(</span>MyDelegateProtocol<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">[</span><span class="token punctuation">[</span>delegate expect<span class="token punctuation">]</span> someMethod<span class="token punctuation">]</span><span class="token punctuation">;</span>\nmyClassIvar<span class="token punctuation">.</span>connectionDelegate <span class="token operator">=</span> delegate<span class="token punctuation">;</span>\n<span class="token punctuation">[</span>myClassIvar someOtherMethod<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">STAssertNoThrow</span><span class="token punctuation">(</span><span class="token punctuation">[</span>delegate verify<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">@"should have called someMethod on delegate"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>But found the assertion failing. I stepped into <code>#someOtherMethod</code> and discovered\nthe delegate was nil. So I added</p>\n<div class="gatsby-highlight">\n      <pre class="language-objectivec"><code><span class="token function">STAssertNotNil</span><span class="token punctuation">(</span>myClassIvar<span class="token punctuation">.</span>connectionDelegate<span class="token punctuation">,</span> <span class="token string">@"should have set delegate"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>And watched that fail as well. Since Git Push is using <a href="http://developer.apple.com/technologies/ios5/">ARC</a>, I <a href="http://clang.llvm.org/docs/AutomaticReferenceCounting.html#objects">read up\non retain semantics</a> to see if I was missing something about local\nreferences. But local references are strong, so the delegate should not have\nbeen deallocated yet.</p>\n<p>I <a href="http://stackoverflow.com/questions/8675054/why-is-my-objects-weak-delegate-property-nil-in-my-unit-tests">posted about this issue on Stack Overflow</a> <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>, where Evan\nsuggested that OCMock may be the issue. Sure enough, creating an explicit class\nconforming to my delegate protocol fixed the issue.</p>\n<div class="gatsby-highlight">\n      <pre class="language-objectivec"><code><span class="token keyword">@interface</span> MockDelegate <span class="token punctuation">:</span> NSObject <span class="token operator">&lt;</span>MyDelegateProtocol<span class="token operator">></span>\n<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> strong<span class="token punctuation">)</span> NSNumber <span class="token operator">*</span>called<span class="token punctuation">;</span>\n<span class="token keyword">@end</span>\n<span class="token keyword">@implementation</span> MockDelegate\n<span class="token keyword">@synthesize</span> called <span class="token operator">=</span> _called<span class="token punctuation">;</span>\n<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>someMethod <span class="token punctuation">{</span>\n  _called <span class="token operator">=</span> <span class="token punctuation">[</span>NSNumber numberWithBool<span class="token punctuation">:</span>YES<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">@end</span>\n\n<span class="token keyword">@implementation</span> MyClassTests\n<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>testSomeOtherMethod <span class="token punctuation">{</span>\n  MockDelegate <span class="token operator">*</span>delegate <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>MockDelegate alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  myClassIvar<span class="token punctuation">.</span>connectionDelegate <span class="token operator">=</span> delegate<span class="token punctuation">;</span>\n  <span class="token punctuation">[</span>myClassIvar someOtherMethod<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token function">STAssertTrue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>delegate<span class="token punctuation">.</span>called boolValue<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">@"should have called someMethod on delegate"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">@end</span>\n</code></pre>\n      </div>\n<p>I still don\'t understand why it was being deallocated, but it was definitely\nrelated to OCMock. I\'ve isolated the issue in <a href="https://github.com/adamstegman/ARCMock">a Github repo</a> to make\nit obvious and repeatable.</p>\n<p>UPDATE: Erik Doernenberg of OCMock looked into the issue and answered the Stack\nOverflow question as well, and determined it\'s actually an issue with NSProxy\nobjects and ARC in the iOS runtime. It works fine on OS X.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Note that my code is slightly different, as I was using a static helper function to create my mock. I confirmed that was not the issue.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',fields:{post:{title:"Nil Weak Reference to an OCMock Mock Object",link:null,timestamp:"2012-01-02T21:55Z",date:"January 2, 2012 9:55pm UTC"}}}},pathContext:{slug:"/nil-weak-reference-to-an-ocmock-mock-object"}}}});
//# sourceMappingURL=path---nil-weak-reference-to-an-ocmock-mock-object-87554208443dbbec120a.js.map