const { v4 } = require('uuid');
import * as AWS from 'aws-sdk';

export const addMovie = async(event) => {
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
            status: 200,
            body: {
                message: 'Movie added successfully'
            }
        };
        
    } catch (error) {
        return {
            status: 500,
            body: {
                message: 'Error creating movie'
            }
        };
    }
    
}

module.exports = {
    addMovie
};