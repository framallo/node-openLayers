Open Layers packaged for [node-browserify](https://github.com/substack/node-browserify) and node.js.

Currently is not working I can't pass the local test.

  npm test

Just add it to your browserify require list and use it!
	
	var $ = require('openlayers')

On browserify you should set:

	app.use(browserify({
    		require : 'openlayers'
  }));



This package was inspired on [jquery-browserify](https://github.com/jmars/jquery-browserify) thanks to jmars
