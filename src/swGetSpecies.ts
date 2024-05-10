import axios from 'axios';

interface IGetData {
  count: number;
  results: {
    name: string
    classification: string
    designation: string
    average_height: string
    skin_colors: string
    hair_colors: string
    eye_colors: string
    average_lifespan: string
    homeworld: string
    language: string
    people: string[]
    films: string[]
    created: string
    edited: string
    url: string
  }[];
}

const getSpecies = async (event) => {
  try {
    const response = await axios.get<IGetData>(
      'https://swapi.py4e.com/api/species/'
    );
    if (response.data) {
      const especies = response.data.results.map((pelicula) => ({
        nombre: pelicula.name,
        clasificacion: pelicula.classification,
        altura: pelicula.average_height,
        color_piel: pelicula.skin_colors,
        color_pelo: pelicula.hair_colors,
        color_ojos: pelicula.eye_colors,
        promedio_vida: pelicula.average_lifespan,
        lenguaje: pelicula.language,
        creado: pelicula.created,
        editado: pelicula.edited,
      }));
      return {
        status: 200,
        body: {
          especies,
        },
      };
    }
    return {
      status: 200,
      body: {
        especies: [],
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
  getSpecies,
};
