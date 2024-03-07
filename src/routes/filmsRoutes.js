// filmsRoutes.js

const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/filmsController');

/**
 * @openapi
 * /films:
 *   get:
 *     summary: Obtiene la lista de películas simulada
 *     tags:
 *       - Films
 *     responses:
 *       '200':
 *         description: Lista de películas
 */
router.get('/api/films', filmsController.getFilmsList);

/**
 * @openapi
 * /films/{id}:
 *   get:
 *     summary: Obtiene los detalles de una película simulada por su ID
 *     tags:
 *       - Films
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la película
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles de la película
 *       '404':
 *         description: La película no fue encontrada
 */
router.get('/api/films/:id', filmsController.getFilmDetails);

module.exports = router;
