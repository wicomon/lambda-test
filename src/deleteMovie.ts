import * as AWS from 'aws-sdk';
const deleteMovie = async(event) =>  {
  try {
      const dynamodb = new AWS.DynamoDB.DocumentClient();
      const { id } = event.pathParameters;       
      const result = await dynamodb.delete({
          TableName: 'MoviesTable',
          Key: { id }
      }).promise();
      return {
        status: 200,
        body: {
            message: 'Movie deleted successfully'
        }
      };
  } catch(error) {
    return {
        statusCode: 500,
        body: JSON.stringify({
            error: {
                message: 'Error al eliminar registro'
            }
        })
    };
  }    
}
module.exports = {
  deleteMovie,
}