webpackJsonp([43701896993975],{420:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I created an <a href="https://developer.apple.com/library/mac/documentation/cocoa/reference/ApplicationKit/Classes/NSTokenField_Class/Reference/Reference.html">NSTokenField</a> and everything worked great with strings as tokens.\nWhen I created a representative class to use instead, I ended up with an error message and a blank token field.</p>\n<pre><code>&#x3C;NSTokenFieldCell: 0x6080003c97e0>: Failed to query display string for a represented object &#x3C;HMCPhotoTag: 0x608000422460>. Ignoring...\n</code></pre>\n<p>Turns out, I just set the <a href="https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSControl_Class/Reference/Reference.html#//apple_ref/occ/instm/NSControl/objectValue"><code>objectValue</code></a> before I set the delegate.\nSetting the delegate first meant the token field could transform my objects correctly.</p>',fields:{post:{title:"NSTokenField failed to query display string for a represented object",link:null,publishedAtTimestamp:null,publishedAt:null}}}},pathContext:{slug:"/nstokenfield-failed-to-query-display-string-for-a-represented-object.html"}}}});
//# sourceMappingURL=path---nstokenfield-failed-to-query-display-string-for-a-represented-object-html-90e2c25c232f8caa47d2.js.map