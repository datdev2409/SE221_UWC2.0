const MCP = require('../models/MCP.model');

//-----------GET ALL-------------//
exports.getAllMCPs = async (req, res) => {
  console.log(req)
  try {
    const MCPs = await MCP.findAll();
    console.log("Get all MCPs success.")
    res.json({
      status: 'success',
      data: MCPs
    })
  } catch (err) {
    next(err)
  }
}


//-----------GET ONE BY ID-------------//
exports.getMCP = async (req, res) => {
  if(!req.body)
  {
      console.err(err)
      res.status(400).json({
        status: 'error',
        message: "Content can not be empty!"
      });
  }
  try {
    const MCPByID = await MCP.findByPk(req.params.id);
    res.json ({
      status: 'success',
      data: MCPByID
    })  
  } catch (err) {
    next(err)
  }
}

//-----------CREATE-------------//
exports.createMCP = async (req, res) => {
    if (!req.body) {
      console.err(err)
      res.status(400).json({
        status: 'error',
        message: "Content can not be empty!"
      });
    }
    try {
      console.log(req.body)
      const newMCP = await MCP.create({
        long: req.body.long,
        lat: req.body.lat,
        isFull: req.body.isFull,
        type: req.body.type,
      });
      res.json({
        status: 'success',
        data: newMCP
      })
    } catch (err) {
      next(err)
    }
}



//-----------UPDATE-------------//
exports.updateMCP = async (req, res) => {
  try {
    const id = req.params.id;
    const updatingMCP = await MCP.update({
        long: req.body.long,
        lat: req.body.lat,
        isFull: req.body.isFull,
        type: req.body.type
  }, {
    where: {
      id: id
    }
  });
  res.json({
    status: 'success',
    data: updatingMCP
  })  
  } catch (err) {
    next(err)
  }  
}


//-----------REMOVE-------------//

exports.removeMCP = async (req, res) =>{
  try {
    const id = req.params.id;
  const removing = await MCP.destroy({
    where: {
      id: id
    }
  });
  res.json({
    status: 'success',
    data: removing
  })  
  } catch (err) {
    next(err)
  }
}
