check:
	csslint --quiet overhead.css
	jshint overhead.js
	eslint overhead.js
	test `cat overhead.css | grep . | wc -l` -lt 100
	test `cat overhead.js | grep . | wc -l` -lt 120
