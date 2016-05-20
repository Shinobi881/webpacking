#Webpacking

##What are we doing here?

This is an introduction to `webpack`. We're gonna keep it simple and cover only the simplest of use cases. We're not gonna make any comparisons here to Browserify, Gulp, Grunt, SystemJS. The goal here is just to keep it simple with Webpack (and npm).


###Use cases:

1. Module loading - CommonJS and AMD (we're gonna use CommonJS)
  ex: `module.exports` and `require('./some-file.js')`

2. Bundling = "concat" our code (We get this by default)

3. Transpiling - translating our code from ES6/7 to ES5/3/3.1 (for browser compatibility)

4. Hot Module Replacement - See code changes without refreshing your browser


####What we'll cover:

1. Bare minimums (in relationship to all the stuff above)
2. [Some] Common loaders
3. [Some] Common error messages
4. Webpack and React
5. Simple production config

####If we have time:

1. Webpack and Node
2. Deploy to Heroku
3. Webpack and Angular 1.5

*INSTRUCTIONS.md will only provide instructions relative to its branch. See CHANGELOG.md for all instructions.*