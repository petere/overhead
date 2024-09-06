all: example.html

%.html: %.md
	cmark --unsafe $< >$@
