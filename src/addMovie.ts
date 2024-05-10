const { v4 } = require('uuid');
import * as AWS from 'aws-sdk';

const addMovie = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, director, year } = JSON.parse(event.body);

    const createdAt = new Date();
    const id = v4();

    const newMovie = {
        id,
        titulo: title,
        director,
        anio: year,
        createdAt
    }
    try {
        await dynamodb.put({
            TableName: 'MoviesTable',
            Item: newMovie
        }).promise()
    
        return {
            statusCode: 200,
            body: JSON.stringify(newMovie)
        }
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: {
                    message: 'Error al crear pelicula'
                }
            })
        };
    }
    
}

module.exports = {
    addMovie
};