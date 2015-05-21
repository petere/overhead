# Overhead — really simple slides with Markdown

- write your slides on plain Markdown, no special syntax
- include one small JavaScript file and one small CSS file
- no extra software required, nothing that can get screwed up

Check out the [example](http://overhead.xyz/examples/example.html).

## Installation

Check out this repository wherever you want to.  For a particular
project, it might be best if you put it as a subdirectory of your
content.  If you are slightly daring, you can also link to
Internet-hosted versions of the files.

## Authoring

Write your content in Markdown, wrap slides in `<div
class="slide">`...`</div>`.

Example:

```markdown
<div class="slide">

# My Presentation

by me

</div>
<div class="slide">

## First Point

- foo
- bar
- baz

</div>
<div class="slide">

## Further Point

out of ideas, really

</div>
```

(Yes, you need to sprinkle HTML tags throughout your Markdown.  This
might be a bit weird at first, but it's the Markdown way to do it, and
all conforming tools will handle this, unlike custom syntax that other
tools have made up.)

I recommend using a level-1 header for the title page and any pages where you want to emphasize a single phrase, and level-2 headers for normal slides with content, but this is not a requirement.

Add the following to the top of your file (adjusting paths as
appropriate):

```html
<link href="overhead/overhead.css" rel="stylesheet">
<script src="overhead/overhead.js"></script>
```

## Processing

You can use just about any Markdown processor you want, but I
recommend the [CommonMark](http://commonmark.org/)
[reference implementation](https://github.com/jgm/cmark).

    cmark presentation.md >presentation.html

If you use [MultiMarkdown](http://fletcherpenney.net/multimarkdown/),
you need to use the option `--process-html`.

It's also possible to wire things up so that the Markdown is processed
on the fly in the browser.  See
[this example](http://overhead.xyz/examples/example2.html).

## Presenting

Open the produced HTML file in a non-ancient browser, and navigate
with keys or mouse.

## Source code highlighting

Source code highlighting is possible, if you use a
CommonMark-compatible Markdown processor and an HTML5-conforming
syntax highlighter.  More specifically, the Markdown processor needs
to support fenced code blocks, like

    ```ruby
    ...
    ```

which results in `<pre><code
class="language-ruby">`...`</code></pre>`, and the highlighter needs
to trigger on those `<code>` elements.

I recommend checking out

- [highlight.js](https://highlightjs.org/) (see [example](http://overhead.xyz/examples/example.html))
- [Prism](http://prismjs.com/)

You might have to do some work to make the themes of the highlighter
match up with the colors of your presentation.  Here are some tips,
but note that the details might change depending on the respective
tool.

### highlight.js

Pick a theme that matches your presentation (e.g., `dark` for the
default Overhead theme), and then customize it like this:

```css
.hljs {
  background-color: transparent;
  padding: 0;
}
```

The supplied CSS stylesheet already contains some settings to match up
with highlight.js.

Note that while highlight.js is available via CDNs, in the spirit of
Overhead, you should get a local copy, lest the Internet flakes out
when you hold your presentation.

### Prism

Pick a theme that matches your presentation (the provided themes don't
match the default Overhead theme very well, but `okaidia` seems to
work), and then customize it like this:

```css
code[class*="language-"],
pre[class*="language-"] {
  background-color: transparent;
  padding: 0;
}
```

## Other features

- The document title is set from the first level-1 header in the document.  Normally, this should be the title page.
- Printing is supported.  Just print, and you should get one page per
slide.
- There are URL fragments for direct linking to a slide.
- Press `f` to enter full-screen mode, press `g` to exit.  You can also use the browser's native ways to activate full-screen or presentation mode, but this might be easier.

## Customizing

Check out `overhead.css`.  Edit away or include your own CSS file.
