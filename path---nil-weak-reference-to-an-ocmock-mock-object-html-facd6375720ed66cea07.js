webpackJsonp([0x5c875ef83de0],{419:function(e,t){e.exports={data:{markdownRemark:{html:'<p>While I was working on unit tests for <a href="http://adamstegman.com/projects/git-push.html">Git Push</a>, I wanted to mock my\ndelegate so I could create an expectation. So I used <a href="http://ocmock.org/">OCMock</a>:</p>\n<pre><code>id delegate = [OCMockObject mockForProtocol:@protocol(MyDelegateProtocol)];\n[[delegate expect] someMethod];\nmyClassIvar.connectionDelegate = delegate;\n[myClassIvar someOtherMethod];\nSTAssertNoThrow([delegate verify], @"should have called someMethod on delegate");\n</code></pre>\n<p>But found the assertion failing. I stepped into <code>#someOtherMethod</code> and discovered\nthe delegate was nil. So I added</p>\n<pre><code>STAssertNotNil(myClassIvar.connectionDelegate, @"should have set delegate");\n</code></pre>\n<p>And watched that fail as well. Since Git Push is using <a href="http://developer.apple.com/technologies/ios5/">ARC</a>, I <a href="http://clang.llvm.org/docs/AutomaticReferenceCounting.html#objects">read up\non retain semantics</a> to see if I was missing something about local\nreferences. But local references are strong, so the delegate should not have\nbeen deallocated yet.</p>\n<p>I <a href="http://stackoverflow.com/questions/8675054/why-is-my-objects-weak-delegate-property-nil-in-my-unit-tests">posted about this issue on Stack Overflow</a> <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>, where Evan\nsuggested that OCMock may be the issue. Sure enough, creating an explicit class\nconforming to my delegate protocol fixed the issue.</p>\n<pre><code>@interface MockDelegate : NSObject &#x3C;MyDelegateProtocol>\n@property (nonatomic, strong) NSNumber *called;\n@end\n@implementation MockDelegate\n@synthesize called = _called;\n- (void)someMethod {\n  _called = [NSNumber numberWithBool:YES];\n}\n@end\n\n@implementation MyClassTests\n- (void)testSomeOtherMethod {\n  MockDelegate *delegate = [[MockDelegate alloc] init];\n  myClassIvar.connectionDelegate = delegate;\n  [myClassIvar someOtherMethod];\n  STAssertTrue([delegate.called boolValue], @"should have called someMethod on delegate");\n}\n@end\n</code></pre>\n<p>I still don\'t understand why it was being deallocated, but it was definitely\nrelated to OCMock. I\'ve isolated the issue in <a href="https://github.com/adamstegman/ARCMock">a Github repo</a> to make\nit obvious and repeatable.</p>\n<p>UPDATE: Erik Doernenberg of OCMock looked into the issue and answered the Stack\nOverflow question as well, and determined it\'s actually an issue with NSProxy\nobjects and ARC in the iOS runtime. It works fine on OS X.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Note that my code is slightly different, as I was using a static helper function to create my mock. I confirmed that was not the issue.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',fields:{post:{title:"Nil Weak Reference to an OCMock Mock Object",link:null,publishedAtTimestamp:"2012-01-02T21:55Z",publishedAt:"January 2, 2012 9:55pm UTC"}}}},pathContext:{slug:"/nil-weak-reference-to-an-ocmock-mock-object.html"}}}});
//# sourceMappingURL=path---nil-weak-reference-to-an-ocmock-mock-object-html-facd6375720ed66cea07.js.map