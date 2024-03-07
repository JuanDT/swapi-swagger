
const planetsData = [
  {
    id: 1,
    name: 'Tatooine',
    climate: 'Arid',
  },
  {
    id: 2,
    name: 'Alderaan',
    climate: 'Temperate',
  },
  {
    id: 3,
    name: 'Yavin IV',
    climate: 'Temperate, Tropical',
  },
  {
    id: 4,
    name: 'Hoth',
    climate: 'Frozen',
  },
  {
    id: 5,
    name: 'Dagobah',
    climate: 'Murky',
  },
  {
    id: 6,
    name: 'Endor',
    climate: 'Temperate, Forest',
  },
];


const getPlanetsList = (req, res) => {
  res.json(planetsData);
};

const getPlanetDetails = (req, res) => {
  const id = parseInt(req.params.id);
  const planet = planetsData.find(planet => planet.id === id);

  if (!planet) {
    res.status(404).send('Planeta no encontrado');
  } else {
    res.json(planet);
  }
};

module.exports = {
  getPlanetsList,
  getPlanetDetails,
};
