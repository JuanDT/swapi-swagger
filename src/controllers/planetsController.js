const axios = require('axios');

const getPlanetsList = async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/planets/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de planetas' });
  }
};

const getPlanetDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles del planeta' });
  }
};

module.exports = {
  getPlanetsList,
  getPlanetDetails,
};
