const express = require('express')
const router = express.Router()
const MCPController = require('../controllers/MCP.controller')


router.get('/', MCPController.getAllMCPs);

router.get('/:id', MCPController.getMCP);

router.post('/', MCPController.createMCP);

router.delete('/:id', MCPController.removeMCP);

router.patch('/:id', MCPController.updateMCP);

module.exports = router
