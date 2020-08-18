import handlerResponse from '../libs/response';
import dynamoDb from '../libs/dynamodb-lib';

export const get = async (event) => {
  try {
    const params = {
      TableName: process.env.todosTable,
      Key: {
        id: event.pathParameters.id
      }
    };

    const todo = await dynamoDb.get(params);

    if (!todo.Item) {
      return handlerResponse(404, `Could not find todo with id ${params.id}`);
    }

    return handlerResponse(200, todo.Item);
  } catch (err) {
    return handlerResponse(500, err.message ?? '');
  }
};
