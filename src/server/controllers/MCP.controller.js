const MCP = require('../models/MCP.model');

//-----------GET ALL-------------//
exports.getAllMCPs = async (req, res) => {
  try {
    const MCPs = await MCP.findAll();

    res.json({
      status: 'success',  
      data: MCPs,
    });
  } catch (err) {
    next(err);
  }
  };

//-----------GET ONE BY ID-------------//
exports.getMCP = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('You must input id field');

    const queryMCP = await MCP.findByPk(req.params.id);
    if (!queryMCP) {
      res.json({
        status: '404',
        message: 'MCP ID not found',
      });
    }

    res.json({
      status: 'success',
      data: queryMCP,
    });
  } catch (err) {
    next(err);
  }
};

//-----------CREATE-------------//
exports.createMCP = async (req, res) => {
  if (!req.body) {
    console.err(err);
    res.json({
      status: '400',
      message: 'Content can not be empty!',
    });
  }
  try {
    const newMCP = await MCP.create({
      long: req.body.long,
      lat: req.body.lat,
      isFull: req.body.isFull,
      type: req.body.type,
    });
    res.json({
      status: 'success',
      data: newMCP,
    });
  } catch (err) {
    next(err);
  }
};

//-----------UPDATE-------------//
exports.updateMCP = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('You must input id field');

    const updatingMCP = await MCP.update(
      {
        long: req.body.long,
        lat: req.body.lat,
        isFull: req.body.isFull,
        type: req.body.type,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({
      status: 'success',
      data: updatingMCP,
    });
  } catch (err) {
    next(err);
  }
};

//-----------REMOVE-------------//

exports.removeMCP = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('You must input id field');

    const removing = await MCP.destroy({
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
