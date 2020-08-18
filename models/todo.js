const joi = require('@hapi/joi');
const uuid = require('uuid');

export const todoSchema = joi.object({
  id: joi.string().guid().default(uuid.v4()),
  task: joi.string().required(),
  isCompleted: joi.boolean().default(false)
});

export const validateTodo = (todo) => todoSchema.validate(todo);
