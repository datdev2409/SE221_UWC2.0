const MCP = require('../models/MCP.model');

//-----------GET ALL-------------//
exports.getAllMCPs = async (req, res) => {
  const MCPs = await MCP.findAll();
  res.json({
    status: 'success',
    data: MCPs
  })
}


//-----------GET ONE BY ID-------------//
exports.getMCP = async (req, res) => {
  const MCP = await MCP.findByPk(req.params.id);
  res.json ({
    status: 'success',
    data: MCP
  })
}

//-----------CREATE-------------//
exports.createMCP = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "Content can not be empty!"
            });
    }
    
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
    
}



//-----------UPDATE-------------//
exports.updateMCP = async (req, res) => {
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
}


//-----------REMOVE-------------//

exports.removeMCP = async (req, res) =>{
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
}
