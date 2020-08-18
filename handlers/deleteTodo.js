import handlerResponse from '../libs/response';
import dynamoDb from '../libs/dynamodb-lib';

export const remove = async (event) => {
  const params = {
    TableName: process.env.todosTable,
    Key: {
      id: event.pathParameters.id
    }
  };

  try {
    await dynamoDb.delete(params);
    return handlerResponse(200, {
      message: `Delete todo ${event.pathParameters.id}`
    });
  } catch (err) {
    handlerResponse(500, err.message ?? '');
  }
};
