module.exports.handler = async (event) => {
  return {
    status: 200,
    body: 
      {
        message: "Listo de endpoints",
        personajes: '/personajes',
        peliculas: '/peliculas',
        especies: '/especies',
        crud: {
          path: '/movies',
        }
      },
  };
};
