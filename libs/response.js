const handlerResponse = (statusCode, payload) => {
  console.log('statusCode\n', statusCode);
  console.log('payload\n', payload);
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  };
};

export default handlerResponse;
