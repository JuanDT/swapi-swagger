const axios = require('axios');

const getStarshipsList = async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/starships/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de naves espaciales' });
  }
};

const getStarshipDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de la nave espacial' });
  }
};

module.exports = {
  getStarshipsList,
  getStarshipDetails,
};
