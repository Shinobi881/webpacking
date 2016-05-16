#Installation

##File changes:

1. `webpack.config.js`
```
entry: './index.jsx',
output: {
  filename: './bundle.js'
}
...
  { test: /\.jsx?$ ... }

```
*Then rename the entry file*

2. `.babelrc`
  1. `[..."react"]`

3. `index.html`
  1. Add `<div id="app"></div>`
  
  2. Change `<script src="./bundle.js">`
  *Then delete current the output file*

4. `another-file.js`
  - Rename to `app.jsx`

5. `.gitignore`
  - `bundle.js`

##npm stuff:
  - `npm i -S react react-dom`
  - `npm i -D babel-preset-react`

##React stuff:

1. `index.jsx`
```
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

render(<App />, document.getElementById('app'));
```

2. `app.jsx`
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>We're Webpack and Reacting</h1>
      </div>
    )
  }
}

export default App;
```

##Then:
- `npm run devserver`


