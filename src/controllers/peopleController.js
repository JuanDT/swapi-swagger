
const peopleData = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
  },
  {
    id: 2,
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
  },
  {
    id: 3,
    name: 'Princess Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
  },
  {
    id: 4,
    name: 'Han Solo',
    height: '180',
    mass: '80',
    hair_color: 'brown',
  },
  {
    id: 5,
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'white',
  },
  {
    id: 6,
    name: 'Yoda',
    height: '66',
    mass: '17',
    hair_color: 'white',
    // ... otros campos
  },
];


// Obtener lista de personas
const getPeopleList = (req, res) => {
  res.json(peopleData);
};

// Obtener detalles de una persona por su ID
const getPersonDetails = (req, res) => {
  const id = parseInt(req.params.id);
  const person = peopleData.find(person => person.id === id);

  if (!person) {
    res.status(404).send('Persona no encontrada');
  } else {
    res.json(person);
  }
};

module.exports = {
  getPeopleList,
  getPersonDetails,
};
