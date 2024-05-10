import * as AWS from 'aws-sdk';
  const getMovie = async(event) =>  {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;
        const result = await dynamodb.get({
            TableName: 'MoviesTable',
            Key: {
                id
            }
        }).promise();

        const movie = result.Item;

        return {
            statusCode: 200,
            body: {
                movie
            }
        };
    } catch(error) {
        console.log(error);
    }    
  }
  module.exports = {
    getMovie
  }