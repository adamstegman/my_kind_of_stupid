---
title: Defending Terrible Things
link: http://garann.wordpress.com/2010/06/19/defending-terrible-things/
date: 2010-06-20T05:14Z
---
> You know what would annoy the shit out of me if I were using a screen reader to read a bibliography on the internet?
> Listening to a goofy-sounding computer voice try to emphasize every single word of *Journal of the Study of Obscure
> and Mostly-in-Latin Canine Diseases Affecting Generally the Respiratory System but Also Sometimes the Lymph Nodes* or
> something. I don’t know that this is still a problem, but the idea is ridiculous in and of itself. Italic does not
> always mean emphasis, nor does bold always mean MAKE THIS LOUD.

Hey, you know, that's true. That's what `<b>` and `<i>` should be used for. Here's what they *shouldn't* be used for, from the same article:

> The bold and italic tags are short. The emphasis tag isn’t bad, but the strong tag is way too long to be a good value
> per keystroke.

Yeah, semantic HTML uses tags that are longer than one character. `<strong>` is five whole more letters than `<b>`! Sounds like someone who throws around a lot of "u"instead of "you", and "y" instead of "why" in textual conversations. Not someone I'd want to take design advice from.

> I add `<b>` and `<i>` to things I don’t necessarily want bolded or italicized. I do it because they’re some of the
> shortest elements available and they provide a hook to style child elements in larger repeated widgets with very
> precise, complex layouts. If I have to wrap every word of text in a tag just to accomplish some goofy layout, I’m
> using the smallest thing available.

That sounds like a pretty poor layout.

Bottom line is, `<b>` and `<i>` have their place, but it's not showing emphasis, nor is it saving keystrokes or because this layout is kinda complicated and I want some easy hooks.
