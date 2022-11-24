const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicle.controller')

router.get('/', vehicleController.getAllVehicles);

router.get('/:id', vehicleController.getVehicle);

router.post('/', vehicleController.createVehicle);

router.delete('/:id', vehicleController.removeVehicle);

router.patch('/:id', vehicleController.updateVehicle);

module.exports = router

