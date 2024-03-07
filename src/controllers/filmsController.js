
const filmsData = [
  {
    id: 1,
    title: 'A New Hope',
    director: 'George Lucas',
  },
  {
    id: 2,
    title: 'The Empire Strikes Back',
    director: 'Irvin Kershner',
  },
  {
    id: 3,
    title: 'Return of the Jedi',
    director: 'Richard Marquand',
  },
  {
    id: 4,
    title: 'The Phantom Menace',
    director: 'George Lucas',
  },
  {
    id: 5,
    title: 'Attack of the Clones',
    director: 'George Lucas',
  },
  {
    id: 6,
    title: 'Revenge of the Sith',
    director: 'George Lucas',
  },
];


const getFilmsList = (req, res) => {
  res.json(filmsData);
};

const getFilmDetails = (req, res) => {
  const id = parseInt(req.params.id);
  const film = filmsData.find(film => film.id === id);

  if (!film) {
    res.status(404).send('Película no encontrada');
  } else {
    res.json(film);
  }
};

module.exports = {
  getFilmsList,
  getFilmDetails,
};
