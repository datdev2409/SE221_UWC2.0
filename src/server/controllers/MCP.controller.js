const MCP = require('../models/MCP.model')

exports.getAllMCPs = async (req, res) => {
  const MCPs = await MCP.findAll();
  res.json({
    status: 'success',
    data: MCPs
  })
}

exports.getMCP = async (req, res) => {
  const id = req.params.id;
}
