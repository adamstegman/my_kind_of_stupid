---
title: "JRuby NameError: missing class or uppercase package name"
created_at: 2013-04-13T19:43Z
---
Originally posted as a [gist][gist] in response to [this twitter conversation][twitter].

I'm working on a Rails application that uses the [Exchange Webservices API][ewsapi]. Unfortunately the EWS API has a weird package, but I thought that wouldn't be hard to overcome. So I wrote this script:

    require 'java'
    require 'vendor/lib/EWSJavaAPI_1.2.jar'

    def microsoft
      Java::Microsoft
    end

    version = microsoft.exchange.webservices.data.ExchangeVersion::Exchange2010_SP1
    service = microsoft.exchange.webservices.data.ExchangeService.new(version)

Getting the ExchangeVersion enum worked fine, but trying to access the ExchangeService class resulted in this error:

>     NameError: missing class or uppercase package name (`microsoft.exchange.webservices.data.ExchangeService')
>     get_proxy_or_package_under_package at org/jruby/javasupport/JavaUtilities.java:54
>     method_missing at file:/Users/adam/.rvm/rubies/jruby-1.7.3/lib/jruby.jar!/jruby/java/java_package_module_template.rb:14
>     (root) at lib/sandbox.rb:11

I thought the problem was with the package name, but the error is actually that the EWS API is missing its dependencies. It needed commons-httpclient and commons-logging-api on the classpath. I discovered this via clojure's error message for similar code:

    (import '(microsoft.exchange.webservices.data ExchangeService))

>     ClassNotFoundException org.apache.commons.httpclient.HttpConnectionManager  java.net.URLClassLoader$1.run (URLClassLoader.java:366)

So the real issue here is JRuby's error message. Interestingly enough, JRuby did give me a better error once commons-httpclient was on the classpath:

>     MultiThreadedHttpConnectionManager.java:70:in `<clinit>': java.lang.NoClassDefFoundError: org/apache/commons/logging/LogFactory

That told me commons-logging-api was also missing. JRuby should have told me that in the first place.

[ewsapi]: http://archive.msdn.microsoft.com/ewsjavaapi
[gist]: https://gist.github.com/adamstegman/5077010
[twitter]: https://twitter.com/adamstegman/status/307944394445688832
