const axios = require('axios');

const getSpeciesList = async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/species/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de especies' });
  }
};

const getSpeciesDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/species/${id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de la especie' });
  }
};

module.exports = {
  getSpeciesList,
  getSpeciesDetails,
};
