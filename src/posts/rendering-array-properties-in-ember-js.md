---
title: Rendering array properties in Ember.js
created_at: 2014-08-23T23:39Z
---
While working on photo uploads in my [latest project][], I needed a network activity indicator to reflect background network usage.
That way, users could navigate away from the upload form and see that uploads were still going in the background.
Since I'm using [Ember.js][] I created a component to display the indicator.
I created an array in my `ApplicationController` to track each upload.
For each element in the array, I rendered a network activity indicator.

The concept was pretty straightforward and in a simple case worked fine.
But when I removed an indicator after an upload was done, I got a strange error:

    TypeError: Cannot read property 'destroy' of undefined
        at Ember.CollectionView.Ember.ContainerView.extend.arrayWillChange (http://localhost:8888/assets/ember.js?body=true:23233:16)
        at null._contentWillChange (http://localhost:8888/assets/ember.js?body=true:23140:10)
        at sendEvent (http://localhost:8888/assets/ember.js?body=true:2302:14)
        at notifyBeforeObservers (http://localhost:8888/assets/ember.js?body=true:2671:5)
        at Object.propertyWillChange (http://localhost:8888/assets/ember.js?body=true:2497:3)
        at set (http://localhost:8888/assets/ember.js?body=true:2763:15)
        at Object.Ember.trySet (http://localhost:8888/assets/ember.js?body=true:2832:10)
        at Object.Binding._sync (http://localhost:8888/assets/ember.js?body=true:6765:15)
        at Object.DeferredActionQueues.flush (http://localhost:8888/assets/ember.js?body=true:5565:24)
        at Object.Backburner.end (http://localhost:8888/assets/ember.js?body=true:5656:27)

The stacktrace indicated the problem is when I `set` the new array of uploads.
From the description of [`Ember.CollectionView`][CollectionView] it looked like the problem is with updating the rendered template from the array:

> `Ember.CollectionView` is an `Ember.View` descendent responsible for managing a collection (an array or array-like object) by maintaining a child view object and associated DOM representation for each item in the array and ensuring that child views and their associated rendered HTML are updated when items in the array are added, removed, or replaced.

Stack Overflow had [an answer][] that explained that the problem was with updating the property bindings:

> `push` doesn't tell the binding to update, but `pushObject` does

Since I was using a native JavaScript array, I was using native methods to add and remove uploads.
I needed to use an `Ember.NativeArray` instead so that I could use it in my template.
This is possible using `Ember.A` to wrap an array-like object:

    this.set('uploadActivityIndicators', Ember.A([id]));
    this.get('uploadActivityIndicators').removeObject(id);

From what I've read, this is typical of Ember—use Ember's replacements for native JavaScript concepts to avoid any surprises like this.
This is one reason why some people prefer Angular or React.
I don't think this is enough of a reason to write off a framework, it's just a guideline of using Ember.
It makes it more complicated to learn but doesn't make it automatically bad.
Still, I need to learn more about Angular and React so I can better compare the options.

[an answer]: http://stackoverflow.com/a/16661864
[CollectionView]: http://emberjs.com/api/classes/Ember.CollectionView.html
[Ember.js]: http://emberjs.com/
[latest project]: https://github.com/adamstegman/photo_albums
