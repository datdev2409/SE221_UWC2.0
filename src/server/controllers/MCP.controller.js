const MCP = require('../models/MCP.model');
const MCP = require('../models/MCP.model')

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
  const MCP = await MCP.findAll({
    where: {
      id: req.params.id
    }
  })
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
    
    const new_MCP = await MCP.create({
        long: req.body.long,
        lat: req.body.lat,
        isFull: req.body.isFull,
        type: req.body.type,
    });
    res.json({
        status: 'success',
        data: new_MCP
    })
    
}



//-----------UPDATE-------------//
exports.updateMCP = async (req, res) => {
  const id = req.params.id;
  const Updating_MCP = await MCP.update({
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
    data: Updating_MCP
  })
}

exports.update_longlat_MCP = async (req, res) => {
  const id = req.params.id;
  const Updating_longlat_MCP = await MCP.update({
        long: req.body.long,
        lat: req.body.lat,
  }, {
    where: {
      id: id
    }
  });
  res.json({
    status: 'success',
    data: Updating_longlat_MCP
  })
}

exports.update_status_MCP = async (req, res) => {
  const id = req.params.id;
  const Updating_status_MCP = await MCP.update({
       isFull: req.body.isFull
  }, {
    where: {
      id: id
    }
  });
  res.json({
    status: 'success',
    data: Updating_status_MCP
  })
}

exports.update_type_MCP = async (req, res) => {
  const id = req.params.id;
  const Updating_status_MCP = await MCP.update({
      type: req.body.type
  }, {
    where: {
      id: id
    }
  });
  res.json({
    status: 'success',
    data: Updating_status_MCP
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

//-------------REMOVE ALL-----------//
exports.remove_all_MCP = async (req, res) =>{
  const destroy = await User.destroy({
    truncate: true
  });
  res.json({
    status: 'success',
    data: destroy
  })
}
