'use strict'

const fs       = require('fs')
const path     = require('path')
const holidays = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'holidays.json'), 'utf8'))
const moment   = require('moment')
const now      = moment.now()

moment.locale('pt-br')

let next  = holidays.filter(holiday => moment(holiday.timestamp).isAfter(now))[0]
next.time = moment(next.timestamp)

module.exports = {
  name: next.name,
  date: next.time.format("dddd, DD [de] MMMM.")
}
