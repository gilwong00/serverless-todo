import handlerResponse from '../libs/response';
import dynamoDb from '../libs/dynamodb-lib';

export const update = async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.todosTable,
    Key: {
      id: event.pathParameters.id
    },
    UpdateExpression: 'SET task = :task, isCompleted = :isCompleted',
    ExpressionAttributeValues: {
      ':task': data.task ?? '',
      ':isCompleted': data.isCompleted ?? false
    },
    ReturnValues: 'ALL_NEW'
  };

  try {
    const { Attributes } = await dynamoDb.update(params);
    return handlerResponse(200, Attributes);
  } catch (err) {
    return handlerResponse(500, err.message ?? '');
  }
};
