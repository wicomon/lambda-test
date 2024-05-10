import axios from 'axios';

interface IGetData {
  count: number;
  results: {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    created: string
    edited: string
    url: string
  }[];
}

const getCharacters = async (event) => {
  try {
    const response = await axios.get<IGetData>(
      'https://swapi.py4e.com/api/people/'
    );
    if (response.data) {
      const personajes = response.data.results.map((pelicula) => ({
        nombre: pelicula.name,
        altura: pelicula.height,
        peso: pelicula.mass,
        color_pelo: pelicula.hair_color,
        color_piel: pelicula.skin_color,
        color_ojos: pelicula.eye_color,
        fecha_nacimiento: pelicula.birth_year,
        genero: pelicula.gender,
        creado: pelicula.created,
        editado: pelicula.edited,
      }));
      return {
        status: 200,
        body: {
          personajes,
        },
      };
    }
    return {
      status: 404,
      body: {
        personajes: [],
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
          error: {
              message: 'Error'
          }
      })
    };
  }
};
module.exports = {
  getCharacters,
};
