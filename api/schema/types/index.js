const gql = require('graphql-tag')
const { buildASTSchema } = require('graphql')

const schema = buildASTSchema(gql`
  type Query {
    name: String
    date: String
  }
`)

module.exports = schema
