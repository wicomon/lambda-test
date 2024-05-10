### Uso

Una vez desplegado, puedes interactuar con las funciones serverless utilizando los puntos de acceso HTTP proporcionados.

- Para ver una lista de peliculas: Envía una petición GET a `/peliculas`.
- Para ver una lista de personajes: Envía una petición GET a `/personajes`.
- Para ver una lista de especies: Envía una petición GET a `/especies`.

- Para ver una lista de películas: Envía una petición GET a `/movies`.
- Para añadir una nueva película: Envía una petición POST a `/movies` con los datos de la película en el cuerpo de la petición.
- Para ver los detalles de una película específica: Envía una petición GET a `/movies/{id}` donde `{id}` es el ID de la película.
- Para actualizar los detalles de una película específica: Envía una petición PUT a `/movies/{id}` con los datos actualizados de la película en el cuerpo de la petición.
- Para eliminar una película específica: Envía una petición DELETE a `/movies/{id}` donde `{id}` es el ID de la película.

---

### Usage

Once deployed, you can interact with the serverless functions using the provided HTTP endpoints.

- To retrieve a list of movies: Send a GET request to `/peliculas`.
- To retrieve a list of characters: Send a GET request to `/personajes`.
- To retrieve a list of species: Send a GET request to `/especies`.

- To retrieve a list of movies: Send a GET request to `/movies`.
- To add a new movie: Send a POST request to `/movies` with the movie data in the request body.
- To retrieve details of a specific movie: Send a GET request to `/movies/{id}` where `{id}` is the ID of the movie.
- To update details of a specific movie: Send a PUT request to `/movies/{id}` with the updated movie data in the request body.
- To delete a specific movie: Send a DELETE request to `/movies/{id}` where `{id}` is the ID of the movie.
