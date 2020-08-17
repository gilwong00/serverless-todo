const AWS = require('aws-sdk');
const handlerResponse = require('../libs/response');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

export const get = async event => {
  try {
    return handlerResponse(200, { msh: 'Success' });
  } catch (err) {
    console.log('err', err);
    return handlerResponse(500, err.message ?? '');
  }
};
