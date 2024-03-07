const axios = require('axios');

const getVehiclesList = async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/vehicles/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de vehículos' });
  }
};

const getVehicleDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles del vehículo' });
  }
};

module.exports = {
  getVehiclesList,
  getVehicleDetails,
};
