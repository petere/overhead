<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/dark.min.css">
<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<link href="../overhead.css" rel="stylesheet">
<script src="../overhead.js"></script>

<div class="slide">

# Overhead

really simple slides with Markdown

by [Peter Eisentraut](http://peter.eisentraut.org)
</div>
<div class="slide">

### Before we start

- use cursor keys or mouse to navigate
- press <key>f</key> for full screen

</div>
<div class="slide">

## But why?

</div>
<div class="slide">

## Other presentation tools

- are too complicated for occasional speakers
- are bloated
- are ugly
- are hard to customize
- don’t render my content correctly
- keep breaking

</div>
<div class="slide">

I like writing, but producing slides is giving me angst.  Before every
conference, I try a new tool, without much success.

</div>
<div class="slide">

## Some things I have tried

- LaTeX Beamer: complicated syntax, very fragile, huge software stack,
  not very agile, hard to customize, hard to include images, videos

This is still a respectable tool, but we can do better.

</div>
<div class="slide">

## Some things I have tried

- DocBook Slides: verbose syntax, hard to customize, dated look

I like the idea of standardized markup, but the implementation is
dated and hard to work with.

</div>
<div class="slide">

## Some things I have tried

- OpenOffice: WYSIWYG is frustrating, consistent formatting is
  cumbersome

Gets the job done, but not what I’m aiming for.

</div>
<div class="slide">

## Some things I have tried

- [Showoff](https://github.com/puppetlabs/showoff): huge Ruby stack
  keeps breaking, nonstandard Markdown syntax, hard to fix things when
  the formatting doesn't work

This was the right idea, but it kept breaking.

</div>
<div class="slide">

## Some things I have tried

- [reveal.js](http://lab.hakim.se/reveal-js/): huge codebase, kept
  truncating my code samples, a lot of work to customize

Again, right idea, but it shouldn’t be that complicated.

</div>
<div class="slide">

## I don’t ask for much

- tools that don’t break
- version-controllable
- easy to customize
- but no customization necessary
- simple syntax
- standardized formats

</div>
<div class="slide">

## No dependencies

- I don’t want to live in fear of having to debug a Ruby or NPM stack
  the night before a presentation.
- I’d like my presentation to still work in two, three, or six years.

</div>
<div class="slide">

## Standardized formats

- Markdown and/or HTML
- let the browser handle the rest:
    - images
    - videos
    - math markup?
    - your custom JavaScript magic?

</div>
<div class="slide">

## It’s not that hard!

- standard Markdown/[CommonMark](http://commonmark.org/) processor, plus
- <100 lines of plain [CSS](../overhead.css), plus
- <120 lines of plain [JavaScript](../overhead.js), plus
- browser

= complete presentation tool

</div>
<div class="slide">

## Example

[source of this presentation](example.md)

</div>
<div class="slide">

## Little code, lots of features

- keyboard, mouse, and touch navigation
- supports some presenter remotes (if they produce key events)
- easy full screen mode
- direct links to slides (URL fragments)
- printing/PDF support
- source code highlighting

</div>
<div class="slide">

## Source code highlighting

example with [highlight.js](https://highlightjs.org/):

```ruby
# a comment
if i > 0
  puts "positive"
end
```
</div>
<div class="slide">

## Not supported/not planned

- speaker notes
- speaker clock
- incremental revealing
- slide transitions

</div>
<div class="slide">

I have never seen Al Gore or Steve Jobs use speaker notes.  Just
sayin’.

</div>
<div class="slide">

## Final remark

- Don’t write presentation slides like I did here.
- This is a “presentation” for reading on the web, not for presenting.

</div>
<div class="slide">

## Resources

- <http://overhead.xyz/>
- <http://github.com/petere/overhead>

</div>
<div class="slide">

## Contact

- <peter@eisentraut.org>
- <http://peter.eisentraut.org/>
- [@petereisentraut](https://twitter.com/petereisentraut)

</div>
<div class="slide">

# Good bye

</div>
<div class="slide">

## Postscript: Table test

<table>
<caption>caption</caption>
<tr>
<th>th</th>
<th>th</th>
</tr>
<tr>
<td>td</td>
<td>td</td>
</tr>
<tr>
<td>td</td>
<td>td</td>
</tr>
</table>

</div>
