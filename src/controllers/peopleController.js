const axios = require('axios');

const getPeopleList = async (req, res) => {
  try {
    const { search } = req.query;
    const response = await axios.get(`https://swapi.dev/api/people/?search=${search || ''}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de personajes' });
  }
};

const getPersonDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles del personaje' });
  }
};

module.exports = {
  getPeopleList,
  getPersonDetails,
};
