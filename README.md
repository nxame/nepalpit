# <abbr title="Personal Income Tax">PIT</abbr> Calculator for Nepal
Personal Income Tax (PIT) calculator utility for Nepal

## 🛠 How to use

For browsers, download the zip file and you simply use the script tag to load bundled file.
```html
<script src="./danfebooks.pit.js"></script>
```
This script tag will expose a variable called "`danfebooks`" to your global space. 

For nodejs, install the package
```
npm i -S @danfebooks/nepalpit
```

And then, require the package

```js
// app.js
var danfebooks = require('@danfebooks/nepalpit');
```

You can read about **options** and **APIs** on the "Guides (in progress)" page. Please check the [example](./example) directory for code samples.

### 📦 Packaged  modules
The bundled module is an [UMD](https://github.com/umdjs/umd)  module, and this package can use this in any environments, i.e., browser or nodejs

___

## Development

Clone the repo and install npm packages
```
https://github.com/danfebooks/nepalpit.git
cd nepalpit
npm install
```

### Project structure
* `example` - Example use cases in browser and nodejs
* `lib` - Compiled javascript bundle for package
* `src` - All source code
* `test` - Test cases

### Start dev server

To start the webpack build and a simple HTTP server from the example folder.
```
npm start
```

The `example` directory is used for the development build for seamless browser testing.

Navigate to http://localhost:5000

### NodeJS compatibility check

Execute following
```
node example/node-example.js
```
The above command ensures the compiled umd bundle works with nodejs if it didn't throw an error.
___
## Production
Execute
```
npm run build
```
The above command will produce a production build inside the `lib` directory to publish on npm. The `lib` directory is also the package's `main` field.

### Publish to npm
Make sure you have [np package](https://github.com/sindresorhus/np) installed globally Then execute, **`np`** from the root and follow the np guidelines.
