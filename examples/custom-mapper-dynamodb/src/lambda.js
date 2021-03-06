const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app')
const { mapDynamoDbEventToHttpRequest, mapResponseToDynamoDb } = require('./dynamodb-event-mappings')

const se = serverlessExpress.configure({
  app,
  eventFns: {
    request: mapDynamoDbEventToHttpRequest,
    response: mapResponseToDynamoDb
  }
})

exports.handler = se.handler
