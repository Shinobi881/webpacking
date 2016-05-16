#Current -------

####npm stuff:
  
  - `npm i -D webpack-dev-server`
  - `"devserver": "webpack-dev-server"` to `scripts` in `package.json`

##Then:
 - `npm run devserver`
 - Browser to: `localhost:8080/webpack-dev-server/`


#Previous ------

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


