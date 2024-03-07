const express = require('express');
const router = express.Router();
const starshipsController = require('../controllers/starshipsController');

/**
 * @swagger
 * /starships/api/starships:
 *   get:
 *     summary: Obtiene la lista paginada de naves espaciales de Star Wars
 *     tags:
 *       - Starships
 *     responses:
 *       '200':
 *         description: Lista de naves espaciales
 */
router.get('/api/starships', starshipsController.getStarshipsList);

/**
 * @swagger
 * /starships/api/starships/{id}:
 *   get:
 *     summary: Obtiene los detalles de una nave espacial específica por su ID
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
