check:
	csslint --quiet *.css
	jshint *.js
	test `cat *.css | wc -l` -lt 100
	test `cat *.js | wc -l` -lt 100
