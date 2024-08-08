# <abbr title="Personal Income Tax">PIT</abbr> Calculator for Nepal
Personal Income Tax (PIT) calculator utility for Nepal

[![npm version](https://badge.fury.io/js/@danfebooks%2Fnepalpit.svg)](https://badge.fury.io/js/@danfebooks%2Fnepalpit)

## 🛠 How to use

#### For Browsers
Download the zip file and you simply use the script tag to load bundled file.
```html
<script src="./danfebooks.pit.js"></script>
```
This script tag will expose a variable called "`danfebooks`" to your global space. 

#### For nodejs
Install the package
```bash
yarn add @danfebooks/nepalpit
```

And then, require the package

```js
// app.js
var danfebooks = require('@danfebooks/nepalpit');
```

Please check the [example](./example) directory for code samples.

### 📦 Packaged  modules
The bundled module is an [UMD](https://github.com/umdjs/umd)  module, and this package can use this in any environments, i.e., browser or nodejs, react

___

## Development

Clone the repo and install npm packages
```
https://github.com/danfebooks/nepalpit.git
cd nepalpit
yarn
```

### Project structure
* `example` - Example use cases in browser and nodejs
* `lib` - Compiled javascript bundle
* `src` - All source code
* `src\test` - Test cases

### Start dev server

To start the webpack build and a simple HTTP server from the example folder.
```
yarn start
```

The `example` directory is used for the development build for seamless browser testing.

If you want to test nodejs, run `yarn example:node`, or a simple html usage: `yarn example:browser`

Navigate to http://localhost:3000

___
## Build

Run
```
yarn build
```
The above command will produce a production build inside the `lib` directory to publish on npm. The `lib` directory is also the package's `main` field.

### Publish to npm
Make sure you have [np package](https://github.com/sindresorhus/np) installed globally Then execute, **`np`** from the root and follow the np guidelines.
