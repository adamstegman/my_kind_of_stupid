---
title: Implementing a Mutable Subclass in Objective-C
created_at: 2012-01-06T06:31Z
created_at_text: January 6, 2012 12:31am
kind: article
---

I'm writing a class in [Git Push][git push] to hold and fetch git blobs from
[Github][github].

    @interface GHBlob : NSObject <NSCopying, NSMutableCopying>
    @property (nonatomic, copy, readonly) NSData *content;
    ...
    @end
    
    @implementation GHBlob
    @synthesize content = _content;
    ...
    @end

To support creating and updating blobs, I wrote a mutable subclass initialized
in #mutableCopy from [NSMutableCopying][nsmutablecopying]. This entailed
redefining properties as `readwrite`:
    
    @interface GHMutableBlob : GHBlob
    @property (nonatomic, copy, readwrite) NSData *content;
    ...
    @end
    
    @implementation GHMutableBlob
    @synthesize content = _content;
    ...
    @end

### Problems

#### Resynthesizing

As shown above, I also re-synthesized the methods in the subclass. However,
this resulted in the subclass's initializer breaking.

    GHBlob *newBlob = [blob mutableCopy];
    STAssertEquals(newBlob.content, blob.content, nil);
      //=> '<00000000>' should be equal to '<10cbb806>'

On review, I noticed something I'd missed before in
[Apple's documentation on redeclaring properties][apple]. The redeclared
property isn't synthesized in their example, it's declared `@dynamic` and the
setter is defined by hand. I scoffed at the inconvenience (isn't this what
synthesizing is supposed to avoid?), but did it anyway.

#### Unreachable instance variables

Next, the compiler complained that the `_content` instance variable was
unreachable. Oh,
[so *this* is why we define ivars in the interface][interfaceivars] - it makes
them available to subclasses.

### Summary

So to implement `NSMutableCopying`, I had to explicitly declare my instance
variables in the interface and explicitly define setter methods in my mutable
subclass. I thought the property/synthesize syntax was
[saving me the trouble][synthesis], but apparently it's not all rainbows and
unicorns.

    @interface GHBlob : NSObject <NSCopying, NSMutableCopying> {
      NSData *_content;
    }
    @property (nonatomic, copy, readonly) NSData *content;
    ...
    @end
    
    @implementation GHBlob
    @synthesize content = _content;
    @end

And in the mutable subclass:

    @interface GHMutableBlob : GHBlob
    @property (nonatomic, copy, readwrite) NSData *content;
    ...
    @end
    
    @implementation GHMutableBlob
    @dynamic content;
    - (void)setContent:(NSData *)content {
      _content = [content copy];
    }

[apple]: http://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/ObjectiveC/Chapters/ocProperties.html
[arc]: http://developer.apple.com/technologies/ios5/
[arcreadonly]: http://lists.cs.uiuc.edu/pipermail/cfe-dev/2011-July/016227.html
[git push]: http://adamstegman.com/projects/git-push.html
[github]: http://developer.github.com/v3/git/blobs/
[interfaceivars]: http://stackoverflow.com/questions/5015130/do-properties-have-to-be-declared-as-instance-variables-in-objective-c#answer-5015657
[nsmutablecopying]: http://developer.apple.com/library/ios/#documentation/Cocoa/Reference/Foundation/Protocols/NSMutableCopying_Protocol/Reference/Reference.html#//apple_ref/occ/intf/NSMutableCopying
[synthesis]: http://mobile.dzone.com/news/open-letter-apple-please-kill
