/*
  Compute PI with Chudnovsky series
*/
const program = require('commander')
const path = require('path')

const computePI = require('./pi.js')
const { parseDigits, parsePath, savePIToFile } = require('./utils.js')

program
  .option('-d, --digits <digits>', 'number of digit to calculate', '2')
  .option('-o, --out <path>', 'where to save calculated pi')

program.parse(process.argv)
;(async () => {
  const digits = parseDigits(program.digits)
  const outPath = parsePath(program.out)

  const hrstart = process.hrtime()
  const PI = await computePI(digits)
  const hrend = process.hrtime(hrstart)

  if (outPath) {
    await savePIToFile(outPath, PI)
    console.log(`Saved pi to ${path.resolve(outPath)}`)
  } else {
    console.log(PI.toString())
  }

  console.info(`Execution time (hr): ${hrend[0]}s ${hrend[1] / 1000000}ms`)
})()
