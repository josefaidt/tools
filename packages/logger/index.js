const chalk = require('chalk')

const time = () => {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  return chalk.gray(timeStr)
}

const lg = (...args) => {
  args.unshift(`${time()} `)
  console.log.apply(console, args)
}

module.exports = lg
