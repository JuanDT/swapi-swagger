// starshipsRoutes.js

const express = require('express');
const router = express.Router();
const starshipsController = require('../controllers/starshipsController');

/**
 * @openapi
 * /starships:
 *   get:
 *     summary: Obtiene la lista de naves espaciales simulada
 *     tags:
 *       - Starships
 *     responses:
 *       '200':
 *         description: Lista de naves espaciales
 */
router.get('/api/starships', starshipsController.getStarshipsList);

/**
 * @openapi
 * /starships/{id}:
 *   get:
 *     summary: Obtiene los detalles de una nave espacial simulada por su ID
 *     tags:
 *       - Starships
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la nave espacial
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles de la nave espacial
 *       '404':
 *         description: La nave espacial no fue encontrada
 */
router.get('/api/starships/:id', starshipsController.getStarshipDetails);

module.exports = router;
