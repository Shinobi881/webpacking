##Current 

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

