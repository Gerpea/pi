const isValid = require('is-valid-path')
const fs = require('fs')

exports.parseDigits = function (d) {
  const digits = parseInt(d, 10)
  if (!isNaN(digits)) {
    return digits
  } else {
    console.log('Error: digits should be an integer value')
    process.exit(1)
  }
}

exports.parsePath = function (o) {
  if (!o) {
    return o
  }

  if (!isValid(o)) {
    console.log('Error: you should specify a correct file path')
    process.exit(1)
  }

  return o
}

exports.savePIToFile = async function (path, pi) {
  fs.closeSync(fs.openSync(path, 'w'))
  await fs.writeFile(path, pi, { flag: 'w' }, function (err) {
    if (err) throw err
  })
}
