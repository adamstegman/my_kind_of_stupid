# Nanoc Github

A skeleton [nanoc](http://nanoc.stoneship.org/) application that supports rendering haml, compass, coffeescript, markdown and builder right out of the box, and deploys the website to Github pages for free with ease in a matter of seconds.

## Prepare

Add it to your existing repository to generate gh-pages:

    git remote add nanoc-gh-pages git://github.com/adamstegman/nanoc-gh-pages.git
    git branch gh-pages-nanoc nanoc-gh-pages/github-pages
    git checkout gh-pages-nanoc
    bundle

## Start the file server

    nanoc compile
    nanoc view

## Auto-compiling when you update files

    guard start

Now visit `http://127.0.0.1:3000/` and there you go. This should display your website. Each time you update a file that changes the look of the web page, Guard will run the nanoc compiler to update the end result which you can directly view in the browser.

## Templating and Scripting with

* HAML
* SASS with the Compass framework
* CoffeeScript
* Markdown
* Builder

## Auto-compiling with

* Guard when files are changed

## Also contains Rake tasks for

* Optimizing JPG and PNG images (using jpegoptim/optipng OSX/Ubuntu packages)
* Compressing Stylesheet and JavaScript files (using YUI Compressor Gem)

## Github deployment

Be sure your nanoc code has been committed on the "gh-pages-nanoc" branch and that it is ready to be deployed. Once ready, run the following command:

    rake deploy

This will do all the dirty work such as setting the base_url, re-compiling the whole website (after removing the old ./output directory), optimizing all assets (css/js/images), and commiting it to the "gh-pages" branch. Then it will push the "gh-pages" branch to "origin/gh-pages". Your website should now be deployed at https://YOU.github.com/YOUR_REPO. Once done it'll automatically switch back to the "gh-pages-nanoc" branch, so you're back where you were prior to the deployment procedure.

You may customize the branch names in the `Rakefile`.
