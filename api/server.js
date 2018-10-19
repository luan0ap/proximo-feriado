const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const { schema, rootValue } = require('./schema')
const { PORT } = require('./config')

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({ schema, rootValue }))

app.listen(PORT)
console.log(`Server runing at: http://localhost:${PORT}/graphql`)