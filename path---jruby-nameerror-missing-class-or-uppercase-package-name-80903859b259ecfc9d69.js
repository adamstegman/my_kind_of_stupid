webpackJsonp([0xdce95044ec3a],{418:function(a,s){a.exports={data:{markdownRemark:{html:'<p>Originally posted as a <a href="https://gist.github.com/adamstegman/5077010">gist</a> in response to <a href="https://twitter.com/adamstegman/status/307944394445688832">this twitter conversation</a>.</p>\n<p>I\'m working on a Rails application that uses the <a href="http://archive.msdn.microsoft.com/ewsjavaapi">Exchange Webservices API</a>. Unfortunately the EWS API has a weird package, but I thought that wouldn\'t be hard to overcome. So I wrote this script:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">require</span> <span class="token string">\'java\'</span>\n<span class="token keyword">require</span> <span class="token string">\'vendor/lib/EWSJavaAPI_1.2.jar\'</span>\n\n<span class="token keyword">def</span> microsoft\n  <span class="token constant">Java</span><span class="token punctuation">:</span><span class="token symbol">:Microsoft</span>\n<span class="token keyword">end</span>\n\nversion <span class="token operator">=</span> microsoft<span class="token punctuation">.</span>exchange<span class="token punctuation">.</span>webservices<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token constant">ExchangeVersion</span><span class="token punctuation">:</span><span class="token symbol">:Exchange2010_SP1</span>\nservice <span class="token operator">=</span> microsoft<span class="token punctuation">.</span>exchange<span class="token punctuation">.</span>webservices<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token constant">ExchangeService</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>version<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Getting the ExchangeVersion enum worked fine, but trying to access the ExchangeService class resulted in this error:</p>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>NameError: missing class or uppercase package name (`microsoft.exchange.webservices.data.ExchangeService\')\nget_proxy_or_package_under_package at org/jruby/javasupport/JavaUtilities.java:54\nmethod_missing at file:/Users/adam/.rvm/rubies/jruby-1.7.3/lib/jruby.jar!/jruby/java/java_package_module_template.rb:14\n(root) at lib/sandbox.rb:11</code></pre>\n      </div>\n</blockquote>\n<p>I thought the problem was with the package name, but the error is actually that the EWS API is missing its dependencies. It needed commons-httpclient and commons-logging-api on the classpath. I discovered this via clojure\'s error message for similar code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-clojure"><code>(import \'(microsoft.exchange.webservices.data ExchangeService))</code></pre>\n      </div>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ClassNotFoundException org.apache.commons.httpclient.HttpConnectionManager  java.net.URLClassLoader$1.run (URLClassLoader.java:366)</code></pre>\n      </div>\n</blockquote>\n<p>So the real issue here is JRuby\'s error message. Interestingly enough, JRuby did give me a better error once commons-httpclient was on the classpath:</p>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>MultiThreadedHttpConnectionManager.java:70:in `<clinit>\': java.lang.NoClassDefFoundError: org/apache/commons/logging/LogFactory</code></pre>\n      </div>\n</blockquote>\n<p>That told me commons-logging-api was also missing. JRuby should have told me that in the first place.</p>',fields:{post:{title:"JRuby NameError: missing class or uppercase package name",link:null,timestamp:"2013-04-13T19:43Z",date:"April 13, 2013 7:43pm UTC"}}}},pathContext:{slug:"/jruby-nameerror-missing-class-or-uppercase-package-name"}}}});
//# sourceMappingURL=path---jruby-nameerror-missing-class-or-uppercase-package-name-80903859b259ecfc9d69.js.map