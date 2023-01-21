import { Button, Box, Dialog } from "@mui/material"
import React, { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { setMCPs } from "../../context/MCP/MCPActions"
import useMCPContext from "../../context/MCP/MCPHook"
import { getAllMCPs } from "../../firebase/MCP"
import { Add } from "@mui/icons-material"
import moment from "moment"
import AddMCPModal from "../../components/AddMCPModal"

function MapModal({ open, handleClose, MCP }) {
  const API_KEY = "AIzaSyB29-zuKEZPel6IZ7_cT__LtQ_SDmcLMjs"
  return (
    <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
      <iframe
        tilte="map"
        width="100%"
        height="600"
        // style="border:0"
        loading="lazy"
        // center={`${MCP.location._lat},${MCP.location._lng}`}
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
    &q=${MCP?.address}`}></iframe>
    </Dialog>
  )
}

function MCPManagement() {
  const [MCPs, dispatch] = useMCPContext()
  const [selectedMCP, setSelectedMCP] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isMapOpen, setMapOpen] = useState(false)

  useEffect(() => {
    getAllMCPs().then((MCPs) => dispatch(setMCPs(MCPs)))
  }, [dispatch])

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "address", headerName: "Address", width: 350 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "last_cleaned", headerName: "Last cleaned", width: 200 }
  ]

  const rows = MCPs.map((MCP) => {
    console.log(MCP)
    return {
      ...MCP,
      last_cleaned: moment(MCP.last_cleaned).format("DD MMM YYYY")
    }
  })

  const viewMCPInfo = (params) => {
    setSelectedMCP(params.row)
    setMapOpen(true)
  }

  return (
    <div style={{ padding: 12 }}>
      <Box className="flex fx-end">
        <Button
          onClick={() => setModalOpen(true)}
          variant="contained"
          endIcon={<Add />}>
          Add MCP
        </Button>
      </Box>
      <AddMCPModal open={isModalOpen} handleClose={() => setModalOpen(false)} />
      <MapModal MCP={selectedMCP} open={isMapOpen} handleClose={() => setMapOpen(false)} />
      <Box sx={{ width: "100%", height: 400 }}>
        <DataGrid
          onRowClick={viewMCPInfo}
          columns={columns}
          rows={rows}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </div>
  )
}

export default MCPManagement
