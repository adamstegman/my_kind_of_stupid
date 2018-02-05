---
title: Nil Weak Reference to an OCMock Mock Object
created_at: 2012-01-02T21:55Z
---
While I was working on unit tests for [Git Push][git push], I wanted to mock my
delegate so I could create an expectation. So I used [OCMock][ocmock]:

    id delegate = [OCMockObject mockForProtocol:@protocol(MyDelegateProtocol)];
    [[delegate expect] someMethod];
    myClassIvar.connectionDelegate = delegate;
    [myClassIvar someOtherMethod];
    STAssertNoThrow([delegate verify], @"should have called someMethod on delegate");

But found the assertion failing. I stepped into `#someOtherMethod` and discovered
the delegate was nil. So I added

    STAssertNotNil(myClassIvar.connectionDelegate, @"should have set delegate");

And watched that fail as well. Since Git Push is using [ARC][arc], I [read up
on retain semantics][retaining] to see if I was missing something about local
references. But local references are strong, so the delegate should not have
been deallocated yet.

I [posted about this issue on Stack Overflow][question] [^1], where Evan
suggested that OCMock may be the issue. Sure enough, creating an explicit class
conforming to my delegate protocol fixed the issue.

    @interface MockDelegate : NSObject <MyDelegateProtocol>
    @property (nonatomic, strong) NSNumber *called;
    @end
    @implementation MockDelegate
    @synthesize called = _called;
    - (void)someMethod {
      _called = [NSNumber numberWithBool:YES];
    }
    @end

    @implementation MyClassTests
    - (void)testSomeOtherMethod {
      MockDelegate *delegate = [[MockDelegate alloc] init];
      myClassIvar.connectionDelegate = delegate;
      [myClassIvar someOtherMethod];
      STAssertTrue([delegate.called boolValue], @"should have called someMethod on delegate");
    }
    @end

I still don't understand why it was being deallocated, but it was definitely
related to OCMock. I've isolated the issue in [a Github repo][arcmock] to make
it obvious and repeatable.

UPDATE: Erik Doernenberg of OCMock looked into the issue and answered the Stack
Overflow question as well, and determined it's actually an issue with NSProxy
objects and ARC in the iOS runtime. It works fine on OS X.

[arc]: http://developer.apple.com/technologies/ios5/
[arcmock]: https://github.com/adamstegman/ARCMock
[git push]: http://adamstegman.com/projects/git-push.html
[ocmock]: http://ocmock.org/
[question]: http://stackoverflow.com/questions/8675054/why-is-my-objects-weak-delegate-property-nil-in-my-unit-tests
[retaining]: http://clang.llvm.org/docs/AutomaticReferenceCounting.html#objects

[^1]: Note that my code is slightly different, as I was using a static helper function to create my mock. I confirmed that was not the issue.
