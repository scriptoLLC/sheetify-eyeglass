var eyeglass = require('eyeglass')
var sass = require('node-sass')
var xtend = require('xtend')

function sheetifyEyeglass (filename, source, options, done) {
  const sassOpts = xtend({
    data: source,
    file: filename,
    indentedSyntax: /\.sass$/i.test(filename),
    eyeglass: {}
  }, options)

  sass.render(eyeglass(sassOpts), function (err, res) {
    if (err) return done(err)
    var data = {
      css: String(res.css),
      files: res.stats.includedFiles
    }

    if (res.map) {
      data.map = String(res.map)
    }

    done(null, data)
  })
}

module.exports = sheetifyEyeglass
