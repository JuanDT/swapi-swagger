// peopleRoutes.js

const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

/**
 * @swagger
 * /people/api/people:
 *   get:
 *     summary: Obtiene la lista paginada de personajes de Star Wars
 *     tags:
 *       - People
 *     parameters:
 *       - in: query
 *         name: search
 *         description: Filtro de búsqueda por nombre
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de personajes
 */
router.get('/api/people', peopleController.getPeopleList);

/**
 * @swagger
 * /people/api/people/{id}:
 *   get:
 *     summary: Obtiene los detalles de un personaje específico por su ID
 *     tags:
 *       - People
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del personaje
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles del personaje
 *       '404':
 *         description: El personaje no fue encontrado
 */
router.get('/api/people/:id', peopleController.getPersonDetails);

module.exports = router;
