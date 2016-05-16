##Current -------

####Create files:

1. `.babelrc` - in the root dir

####npm stuff:

  - `npm i -D babel`
  - `npm i -D babel-core`
  - `npm i -D babel-loader`
  - `npm i -D babel-preset-es2015`
  - `npm i -D babel-preset-stage-0`
                or 
  - `npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-stage-0`

####Modifications:

1. `.babelrc`
```
{
presets: ["es2015", "stage-0"]
}
```

2. `webpack.confi.js`
```
output: {
  ...
},
module: {
  loaders: [
    { test: /\.js$/, loader: 'babel-loader' exclude: /node_modules/ }
  ]
}

```

##Then:
1. Change `require` to import statements (appropriatey)
2. Change `module.export` to `export`, `export default` or `exports`



##Previous ------
Step 1 - `git tag 02-make-it-work`:

####Create files:

1. `grab-all-my-code-from-this-file.js`
  - contents: `document.write('Webpacking!!!');`
2. `webpack.config.js` (we're skipping some CLi stuff)
  - contents:
```
module.exports = {
  entry: './grab-all-my-code-from-this-file.js',
  output: {
    filename: './bundle-my-code-and-put-it-here.js'
  }
}
```  

####npm Stuff:

3. `npm init -y` - Create a `package.json`
4. `npm i -D webpack` - Install webpack to `devDependencies` in `package.json`
5. Add: `"doit": "webpack"` to `scripts` in `package.json`
6. `npm run doit` - From the CLi run 

####HTML stuff:

7. Add: `<script src="./bundle-and-put-it-here.js"></script>` to index.html
8. Open `index.html` in browser

####Do this also:
1. Create another js file
2. `module.exports` something from it
3. `require` it to the entry file
4. Create an element on the page

