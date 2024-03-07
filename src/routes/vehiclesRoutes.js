const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehiclesController');

/**
 * @swagger
 * /vehicles/api/vehicles:
 *   get:
 *     summary: Obtiene la lista paginada de vehículos de Star Wars
 *     tags:
 *       - Vehicles
 *     responses:
 *       '200':
 *         description: Lista de vehículos
 */
router.get('/api/vehicles', vehiclesController.getVehiclesList);

/**
 * @swagger
 * /vehicles/api/vehicles/{id}:
 *   get:
 *     summary: Obtiene los detalles de un vehículo específico por su ID
 *     tags:
 *       - Vehicles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del vehículo
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detalles del vehículo
 *       '404':
 *         description: El vehículo no fue encontrado
 */
router.get('/api/vehicles/:id', vehiclesController.getVehicleDetails);

module.exports = router;
