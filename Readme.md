[<img src="https://img.shields.io/npm/v/cypress-plugin-livereload">](https://www.npmjs.com/package/cypress-plugin-livereload)

# cypress-plugin-livereload

> Reload Cypress tester using livereload

## Installation

```shell
npm install cypress-plugin-livereload
```

## Usage

Add to your `cypress/support/index.js` file

```js
require('cypress-plugin-livereload');
```

Check a full example [here](https://gist.github.com/unlocomqx/d7c6b2958eed98c1fc6873bc64e5bd6c)

# Options
You can configure the plugin in `cypress.json` 

You only need to include the options that are different than the default value

```javascript
"livereload": {
  "hostname": null,
  "https": false,
  "port": 35729,
  "delay": 0
}
```

- **hostname**: (Default: **null**) leave to null to use the current hostname
- **https**: (Default: **false**) if set to true, the wss protocol will be used instead of ws
- **port**: (Default: **35729**) the current port that is used by your livereload server
- **delay**: (Default: **0** ms) increase if needed

Check a full example [here](https://gist.github.com/unlocomqx/daed8b0bc8b253e8a5c3eee1d9a01c62)

## Details

This plugin listens to your livereload server and reloads Cypress when livereload sends a reload command.
 
It aims to make TDD and debugging easier using Cypress 

## License

MIT license