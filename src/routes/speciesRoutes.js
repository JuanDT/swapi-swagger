// speciesRoutes.js

const express = require('express');
const router = express.Router();
const speciesController = require('../controllers/speciesController');

/**
 * @openapi
 * /species:
 *   get:
 *     summary: Obtiene la lista de especies simulada
 *     tags:
 *       - Species
 *     responses:
 *       '200':
 *         description: Lista de especies
 */
router.get('/api/species', speciesController.getSpeciesList);

/**
 * @openapi
 * /species/{id}:
 *   get:
 *     summary: Obtiene los detalles de una especie simulada por su ID
 *     tags:
 *       - Species
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la especie
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles de la especie
 *       '404':
 *         description: La especie no fue encontrada
 */
router.get('/api/species/:id', speciesController.getSpeciesDetails);

module.exports = router;
