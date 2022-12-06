import { Button, Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { setMCPs } from "../../context/MCP/MCPActions"
import useMCPContext from "../../context/MCP/MCPHook"
import { getAllMCPs } from "../../firebase/MCP"
import { Add } from "@mui/icons-material"
import moment from "moment"
import AddMCPModal from "../../components/AddMCPModal"

function MCPManagement() {
  const [MCPs, dispatch] = useMCPContext()
  const [isModalOpen, setModalOpen] = useState(false)

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
    console.log(moment(MCP.last_cleaned))
    return {
      ...MCP,
      last_cleaned: moment(MCP.last_cleaned).format("DD MMM YYYY")
    }
  })

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
      <Box sx={{ width: "100%", height: 400 }}>
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </div>
  )
}

export default MCPManagement
