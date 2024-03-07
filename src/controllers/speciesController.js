
const speciesData = [
  {
    id: 1,
    name: 'Wookiee',
    classification: 'Mammal',
  },
  {
    id: 2,
    name: 'Rodian',
    classification: 'Sentient',
  },
  {
    id: 3,
    name: 'Twilek',
    classification: 'Sentient',
  },
  {
    id: 4,
    name: 'Mon Calamari',
    classification: 'Amphibian',
  },
  {
    id: 5,
    name: 'Hutt',
    classification: 'Gastropod',
  },
  {
    id: 6,
    name: 'Ewok',
    classification: 'Mammal',
  },
];


const getSpeciesList = (req, res) => {
  res.json(speciesData);
};

const getSpeciesDetails = (req, res) => {
  const id = parseInt(req.params.id);
  const species = speciesData.find(species => species.id === id);

  if (!species) {
    res.status(404).send('Especie no encontrada');
  } else {
    res.json(species);
  }
};

module.exports = {
  getSpeciesList,
  getSpeciesDetails,
};
