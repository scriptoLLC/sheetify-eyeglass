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
    done(null, {
      css: String(res.css),
      files: res.includedFiles
    })
  })
}

module.exports = sheetifyEyeglass
