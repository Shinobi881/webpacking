module.exports = {
  context: __dirname,
  entry: './index.jsx',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}