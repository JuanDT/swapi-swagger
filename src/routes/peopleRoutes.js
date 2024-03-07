// peopleRoutes.js

const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

/**
 * @openapi
 * /people:
 *   get:
 *     summary: Obtiene la lista de personas simulada
 *     tags:
 *       - People
 *     responses:
 *       '200':
 *         description: Lista de personas
 */
router.get('/api/people', peopleController.getPeopleList);

/**
 * @openapi
 * /people/{id}:
 *   get:
 *     summary: Obtiene los detalles de una persona simulada por su ID
 *     tags:
 *       - People
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles de la persona
 *       '404':
 *         description: La persona no fue encontrada
 */
router.get('/api/people/:id', peopleController.getPersonDetails);

module.exports = router;
