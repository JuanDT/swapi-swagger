
const vehiclesData = [
  {
    id: 1,
    name: 'Speeder bike',
    model: '74-Z speeder bike',
  },
  {
    id: 2,
    name: 'AT-AT',
    model: 'All Terrain Armored Transport',
  },
  {
    id: 3,
    name: 'Snowspeeder',
    model: 'T-47 airspeeder',
  },
  {
    id: 4,
    name: 'Imperial Speeder Bike',
    model: '74-Z speeder bike',
  },
  {
    id: 5,
    name: 'Sandcrawler',
    model: 'Digger Crawler',
  },
  {
    id: 6,
    name: 'Imperial Speeder Bike',
    model: '74-Z speeder bike',
  },
];


const getVehiclesList = (req, res) => {
  res.json(vehiclesData);
};

const getVehicleDetails = (req, res) => {
  const id = parseInt(req.params.id);
  const vehicle = vehiclesData.find(vehicle => vehicle.id === id);

  if (!vehicle) {
    res.status(404).send('Vehículo no encontrado');
  } else {
    res.json(vehicle);
  }
};

module.exports = {
  getVehiclesList,
  getVehicleDetails,
};
