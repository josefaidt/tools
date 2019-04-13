const chalk = require('chalk')

const time = () => {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  return chalk.gray(timeStr)
}

const lg = (phrase, ...args) => {
  if (phrase.length === 1 && phrase[0].length !== 0 && args.length === 0) {
    return console.log(`${time()} ${phrase}`)
  } else if (args.length > 0) {
    let result = ''
    phrase.forEach((p, i) => {
      result += p + (args[i] || '')
    })
    return console.log(`${time()} ${result}`)
  } else {
    throw new Error('Logger requires an input')
  }
}

module.exports = lg
