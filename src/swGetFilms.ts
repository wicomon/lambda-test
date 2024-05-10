import axios from 'axios';

interface IGetData {
  count: number;
  results: {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }[];
}

const getFilms = async (event) => {
  try {
    const response = await axios.get<IGetData>(
      'https://swapi.py4e.com/api/films/'
    );
    if (response.data) {
      const peliculas = response.data.results.map((pelicula) => ({
        titulo: pelicula.title,
        idEpisodio: pelicula.episode_id,
        resumen: pelicula.opening_crawl,
        director: pelicula.director,
        productor: pelicula.producer,
        fechaEstreno: pelicula.release_date,
        creado: pelicula.created,
        editado: pelicula.edited,
      }));
      return {
        status: 200,
        body: {
          peliculas,
        },
      };
    }
    return {
      status: 200,
      body: {
        peliculas: [],
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: {
        error: '12',
      },
    };
  }
};
module.exports = {
  getFilms,
};
