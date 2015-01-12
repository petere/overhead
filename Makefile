check:
	csslint --quiet --ignore=qualified-headings,unique-headings,compatible-vendor-prefixes overhead.css
	jshint overhead.js
	test `cat overhead.css | wc -l` -lt 100
	test `cat overhead.js | wc -l` -lt 150
