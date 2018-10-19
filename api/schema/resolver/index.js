const data = require('../../db/index')

const rootValue = {
  name: () => data.name,
  date: () => data.date
}

module.exports = rootValue
