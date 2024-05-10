### Usage

Once deployed, you can interact with the serverless functions using the provided HTTP endpoints.

- To retrieve a list of movies: Send a GET request to `/movies`.
- To add a new movie: Send a POST request to `/movies` with the movie data in the request body.
- To retrieve details of a specific movie: Send a GET request to `/movies/{id}` where `{id}` is the ID of the movie.
- To update details of a specific movie: Send a PUT request to `/movies/{id}` with the updated movie data in the request body.
- To delete a specific movie: Send a DELETE request to `/movies/{id}` where `{id}` is the ID of the movie.
