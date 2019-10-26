const chalk = require('chalk')

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"w
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"

const time = () => {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  return timeStr
}

const lg = (phrase, ...args) => {
  if (phrase.length === 1 && phrase[0].length !== 0 && args.length === 0) {
    // return console.log(`${time()} ${phrase}`)
    return console.log('\x1b[2m', time(), '\x1b[0m', phrase)
  } else if (args.length > 0) {
    let result = ''
    phrase.forEach((p, i) => {
      result += p + (args[i] || '')
    })
    return console.log('\x1b[30m', time(), '\x1b[0m', result)
    // return console.log('\x1b[2m', time(), '\x1b[0m', result)
  } else {
    throw new Error('Logger requires an input')
  }
}

lg`This is a message`

module.exports = lg
