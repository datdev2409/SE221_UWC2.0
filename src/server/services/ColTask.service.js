const sequelize = require('sequelize')
const ColTask = require('../models/ColTask.model')

exports.getAllColTask = async ()=>{
    const colTasks = await ColTask.findAll({
        attributes: [
            'id',
            'status', 
            'officer_id', 
            'employee_id',
            'route_id',
            'vehicle_id',
            'finishedAt',
            'acceptedAt'
        ],
    })
    return colTasks
}

exports.getColTaskById = async(id) => {
    const checkPoints = await ColTask.findAll({
        where: { id: id},
    })
    return checkPoints
}

exports.deleteColTask = async (id) => {
    await ColTask.destroy({where: {id}})
}

exports.createColTask = async (stt, offId, routeID, vehicleID) => {
    const newColTask = ColTask.create({
        stt: stt,
        officer_id: offId,
        route_id: routeID,
        vehicle_id: vehicleID
    })
    return newColTask
}

exports.updateColTask = async (id, stt, offId, routeID, vehicleID) => {
    const newColTask = ColTask.create({
        id: id,
        status: stt,
        officer_id: offId,
        route_id: routeID,
        vehicle_id: vehicleID
    })
    return updatedColTask
}