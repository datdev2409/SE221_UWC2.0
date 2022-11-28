const catchAsync = require('../utils/catchAsync')
const colservice = require('../services/ColTask.service');

// GET ALL 

exports.getAllColTask = catchAsync(async (req, res, next) =>{
    const colTasks = await colservice.getAllColTask()
    console.log("hello")
    res.status(200).json({
        status: 'success',
        data: colTasks
    })
})

exports.getColTaskById = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const colTaskId = colservice.getColTaskById(id)

    res.status(200).json({
        status: 'success',
        data: colTaskId
    })
})

exports.createColTask = catchAsync(async (req, res, next)=>{
    const stt = req.body.status
    const offId = req.body.officer_id
    const routeId = req.body.route_id
    const vehicleID = req.body.vehicle_id
    const createdColTask = colservice.createColTask(stt, offId, routeId, vehicleID)

    res.status(200).json({
        status: 'success',
        data: createdColTask
    })
})

exports.deleteColTask = catchAsync(async (req, res, next)=> {
    const id = req.params.id
    const deletedColTask = colservice.deleteColTask(id)

    res.status(200).json({
        status: 'success',
        message: `Deleted Collector Task with id ${id}`
    })
})

exports.updataeColTask = catchAsync(async (req, res, next)=> {
    const id = req.params.id
    const stt = req.body.status
    const offId = req.body.officer_id
    const routeId = req.body.route_id
    const vehicleID = req.body.vehicle_id
    const updateColTask = colservice.updateColTask(id, stt, offId, routeId, vehicleID)

    res.status(200).json({
        status: 'success',
        message: `Updated Collector Task with id ${id}`
    })
})