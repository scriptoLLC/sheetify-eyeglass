const fs = require('fs')
const path = require('path')

const {test, skip} = require('tap') // eslint-disable-line
const bl = require('bl')
const sheetify = require('sheetify')
const browserify = require('browserify')

const opts = {
  transform: [[
    '.', {
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

test('no errors bundling', (t) => {
  const expected = fs.readFileSync(path.join(__dirname, 'expected.css'))

  t.plan(2)
  browserify(path.join(__dirname, 'entry.js'))
    .transform(sheetify, opts)
    .plugin('css-extract', {out: createWs})
    .bundle()

  function createWs () {
    return bl(function (err, buf) {
      t.error(err, 'no error')
      t.equal(String(buf).trim().replace(/[ \n]/g, ''), String(expected).trim().replace(/[ \n]/g, ''))
    })
  }
})
