---
title: NSTokenField failed to query display string for a represented object
created_at: 2013-12-02T01:19Z
created_at_text: December 1, 2013 5:19pm
kind: article
---
I created an [NSTokenField][] and everything worked great with strings as tokens.
When I created a representative class to use instead, I ended up with an error message and a blank token field.

    <NSTokenFieldCell: 0x6080003c97e0>: Failed to query display string for a represented object <HMCPhotoTag: 0x608000422460>. Ignoring...

Turns out, I just set the [`objectValue`][objectValue] before I set the delegate.
Setting the delegate first meant the token field could transform my objects correctly.

[NSTokenField]: https://developer.apple.com/library/mac/documentation/cocoa/reference/ApplicationKit/Classes/NSTokenField_Class/Reference/Reference.html
[objectValue]: https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSControl_Class/Reference/Reference.html#//apple_ref/occ/instm/NSControl/objectValue
