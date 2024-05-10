import * as AWS from 'aws-sdk';

const updateMovie = async(event) =>  {

  try {
      const dynamodb = new AWS.DynamoDB.DocumentClient();

      const { id } = event.pathParameters;

      const { title, director } = JSON.parse(event.body);

      const result = await dynamodb.update({
          TableName: 'MoviesTable',

          UpdateExpression: 'set title = :title, director = :director',
          ExpressionAttributeValues: {                
              ':title': title,
              ':director': director
          },
          Key: { id },
          ReturnValues: 'ALL_NEW'

      }).promise();

      return {
          status: 200,
          body: JSON.stringify({
              message: 'Movie updated successfully'
          })
      };
  } catch(error) {
      console.log(error);
  }    
}

module.exports = {
  updateMovie,
}