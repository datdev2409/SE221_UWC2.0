const Vehicle = require('../models/Vehicle.model');

exports.getAllVehicles = async (req, res) => {
    try {
      const Vehicles = await Vehicle.findAll();
  
      res.json({
        status: 'success',
        data: Vehicles,
      });
    } catch (err) {
      next(err);
    }
  };

exports.getVehicle = async (req, res) => {
try {
    const id = req.params.id;
    if (!id) throw new Error('You must input id field');

    const queryVehicle = await Vehicle.findByPk(req.params.id);
    if (!queryVehicle) {
    res.json({
        status: '404',
        message: 'Vehicle ID not found',
    });
    }

    res.json({
    status: 'success',
    data: queryVehicle,
    });
} catch (err) {
    next(err);
}
};

exports.createVehicle = async (req, res) => {
    if (!req.body) {
      console.err(err);
      res.json({
        status: '400',
        message: 'Content can not be empty!',
      });
    }
    try {
      const newVehicle = await Vehicle.create({
        checkedDate: req.body.checkedDate,
        status: req.body.status,
      });
      res.json({
        status: 'success',
        data: newVehicle,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.updateVehicle = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) throw new Error('You must input id field');
  
      const updatingVehicle = await Vehicle.update(
        {
            checkedDate: req.body.checkedDate,
            status: req.body.status,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({
        status: 'success',
        data: updatingVehicle,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.removeVehicle = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) throw new Error('You must input id field');
  
      const removing = await Vehicle.destroy({
        where: {
          id: id,
        },
      });
      if (removing == 0) {
        res.json({
          status: '204',
        });
      } else {
        res.json({
          status: 'success',
          data: removing,
        });
      }
    } catch (err) {
      next(err);
    }
  };
  