# sheetify-eyeglass [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

[Eyeglass enabled][12] SASS plugin for Sheetify.

## Command line
```sh
$ browserify ./test/source.js -t [ sheetify -t sheetify-eyeglass ]
```

## JS api
```js
const browserify = require('browserify')

const opts = {
  transform: [[
    'sheetify-eyeglass', {
      eyeglass: {
        modules: [
          {
            path: path.join(__dirname, '..', 'node_modules', 'normalize-scss')
          }
        ]
      }
    }
  ]]
}

browserify()
  .transform('sheetify', opts)
  .bundle()
```

## Installation
```sh
$ npm install sheetify-eyeglass
```

## License
[Apache-2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/sheetify-eyeglass.svg?style=flat-square
[3]: https://npmjs.org/package/sheetify-eyeglass
[4]: https://img.shields.io/travis/stackcss/sheetify-eyeglass/master.svg?style=flat-square
[5]: https://travis-ci.org/stackcss/sheetify-eyeglass
[6]: https://img.shields.io/codecov/c/github/stackcss/sheetify-eyeglass/master.svg?style=flat-square
[7]: https://codecov.io/github/stackcss/sheetify-eyeglass
[8]: http://img.shields.io/npm/dm/sheetify-eyeglass.svg?style=flat-square
[9]: https://npmjs.org/package/sheetify-eyeglass
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[12]: https://github.com/sass-eyeglass/eyeglass
