
const starshipsData = [
  {
    id: 1,
    name: 'X-wing',
    model: 'T-65 X-wing',
  },
  {
    id: 2,
    name: 'Imperial Star Destroyer',
    model: 'Imperial I-class Star Destroyer',
  },
  {
    id: 3,
    name: 'Millennium Falcon',
    model: 'YT-1300 Corellian light freighter',
  },
  {
    id: 4,
    name: 'Slave I',
    model: 'Firespray-31-class patrol and attack',
  },
  {
    id: 5,
    name: 'TIE Fighter',
    model: 'TIE/ln space superiority starfighter',
  },
  {
    id: 6,
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
  },
];


const getStarshipsList = (req, res) => {
  res.json(starshipsData);
};

const getStarshipDetails = (req, res) => {
  const id = parseInt(req.params.id);
  const starship = starshipsData.find(starship => starship.id === id);

  if (!starship) {
    res.status(404).send('Nave espacial no encontrada');
  } else {
    res.json(starship);
  }
};

module.exports = {
  getStarshipsList,
  getStarshipDetails,
};
