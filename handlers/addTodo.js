import handlerResponse from '../libs/response';
import dynamoDb from '../libs/dynamodb-lib';
import { validateTodo } from '../models/todo';

export const create = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { value, error } = validateTodo(data);

    if (error) {
      return handlerResponse(500, error.message);
    }

    const params = {
      TableName: process.env.todosTable,
      Item: {
        ...value
      }
    };

    await dynamoDb.put(params);
    return handlerResponse(200, params.Item);
  } catch (err) {
    return handlerResponse(500, err.message ?? '');
  }
};
