import React from "react"
import FilterBar from "./FilterBar"
import ViewMenu from "./ViewMenu"
import { Add } from "@mui/icons-material"
import { Button, Box } from "@mui/material"

function Navbar() {
  return (
    <Box className="flex f-between px-12">
      <ViewMenu />
      <Box className="flex">
        <FilterBar />
        <Button variant="contained" endIcon={<Add />}>
          Add task
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar
