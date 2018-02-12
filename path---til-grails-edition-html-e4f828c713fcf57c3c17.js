webpackJsonp([0xab910ebcc189],{431:function(e,n){e.exports={data:{markdownRemark:{html:'<p>I’ve unfortunately been experiencing the magic of Grails lately.</p>\n<p>TIL:</p>\n<pre><code>new JSONObject([key: []]) == new JSONObject([key: []])\n</code></pre>\n<p>and</p>\n<pre><code>new JSONArray([]) == new JSONArray([])\n</code></pre>\n<p>but</p>\n<pre><code>new JSONObject([key: new JSONArray([])]) != new JSONObject([key: new JSONArray([])])\n</code></pre>\n<p>This is so much fun.</p>\n<p>Update: This is due to a non-implementation of <code>JSONArray.hashCode()</code>. JIRA logged here: <a href="http://jira.grails.org/browse/GRAILS-7770">http://jira.grails.org/browse/GRAILS-7770</a></p>',fields:{post:{title:"TIL, Grails edition",link:null,publishedAtTimestamp:"2011-07-21T17:38Z",publishedAt:"July 21, 2011 5:38pm UTC"}}}},pathContext:{slug:"/til-grails-edition.html"}}}});
//# sourceMappingURL=path---til-grails-edition-html-e4f828c713fcf57c3c17.js.map