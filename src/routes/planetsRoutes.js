// planetsRoutes.js

const express = require('express');
const router = express.Router();
const planetsController = require('../controllers/planetsController');

/**
 * @openapi
 * /planets:
 *   get:
 *     summary: Obtiene la lista de planetas simulada
 *     tags:
 *       - Planets
 *     responses:
 *       '200':
 *         description: Lista de planetas
 */
router.get('/api/planets', planetsController.getPlanetsList);

/**
 * @openapi
 * /planets/{id}:
 *   get:
 *     summary: Obtiene los detalles de un planeta simulado por su ID
 *     tags:
 *       - Planets
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del planeta
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles del planeta
 *       '404':
 *         description: El planeta no fue encontrado
 */
router.get('/api/planets/:id', planetsController.getPlanetDetails);

module.exports = router;
