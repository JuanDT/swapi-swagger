const axios = require('axios');

const getFilmsList = async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de películas' });
  }
};

const getFilmDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de la película' });
  }
};

module.exports = {
  getFilmsList,
  getFilmDetails,
};
