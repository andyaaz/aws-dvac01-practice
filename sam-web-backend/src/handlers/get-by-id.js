const tableName = process.env.SAMPLE_TABLE;

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
exports.getByIdHandler = async event => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getMethod only accept GET method, you tried: ${event.httpMethod}`
    );
  }
  // All log statements are written to CloudWatch
  console.info("received:", event);
  console.debug("tableName: ", tableName);

  const id = event.pathParameters.id;

  var params = {
    TableName: tableName,
    Key: { id: id },
  };

  const response = {
    statusCode: 200,
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
