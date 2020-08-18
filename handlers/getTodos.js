import handlerResponse from '../libs/response';
import dynamoDb from '../libs/dynamodb-lib';

export const list = async () => {
  try {
    const params = {
      TableName: process.env.todosTable,
      Select: 'ALL_ATTRIBUTES'
    };

    const todos = await dynamoDb.scan(params);
    return handlerResponse(200, todos.Items);
  } catch (err) {
    return handlerResponse(500, err.message ?? '');
  }
};
