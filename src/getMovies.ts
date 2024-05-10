import * as AWS from 'aws-sdk';
const getMovies = async(event) =>  {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: 'MoviesTable'
        }).promise();
        const movies = result.Items;

        return {
            status: 200,
            body: {
                movies
            }
        };
    } catch(error) {
        console.log(error);
    }   
}
module.exports = {
    getMovies
}