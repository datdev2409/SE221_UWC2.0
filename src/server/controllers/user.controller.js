const User = require('../models/User.model');

exports.getAllUsers = async (req, res) => {
    try {
      const Users = await User.findAll();
  
      res.json({
        status: 'success',
        data: Users,
      });
    } catch (err) {
      next(err);
    }
  };

exports.getUser = async (req, res) => {
try {
    const id = req.params.id;
    if (!id) throw new Error('You must input id field');

    const queryUser = await User.findByPk(req.params.id);
    if (!queryUser) {
    res.json({
        status: '404',
        message: 'User ID not found',
    });
    }

    res.json({
    status: 'success',
    data: queryUser,
    });
} catch (err) {
    next(err);
}
};

exports.createUser = async (req, res) => {
    if (!req.body) {
      console.err(err);
      res.json({
        status: '400',
        message: 'Content can not be empty!',
      });
    }
    try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        role: req.body.role,
      });
      res.json({
        status: 'success',
        data: newUser,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) throw new Error('You must input id field');
  
      const updatingUser = await User.update(
        {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            role: req.body.role,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({
        status: 'success',
        data: updatingUser,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.removeUser = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) throw new Error('You must input id field');
  
      const removing = await User.destroy({
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
  