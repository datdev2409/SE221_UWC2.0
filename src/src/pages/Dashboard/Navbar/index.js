import React, { useState } from "react"
import FilterBar from "./FilterBar"
import ViewMenu from "./ViewMenu"
import { Add } from "@mui/icons-material"
import { Button, Box, Snackbar, Alert } from "@mui/material"
import AddModal from "../Modal/AddModal"

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false)
  const [isAlertOpen, setAlertOpen] = useState(false)

  const handleClick = () => {
    console.log("click")
    setModalOpen((prev) => !prev)
  }

  const closeModel = () => {
    setModalOpen(false)
  }

  const handleSaveTask = () => {
    setAlertOpen(true)
    setModalOpen(false)
    setTimeout(() => setAlertOpen(false), 2000)
  }

  return (
    <Box className="flex f-between px-12">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isAlertOpen}>
        <Alert severity="success">Task is created successfully</Alert>
      </Snackbar>

      <ViewMenu />
      <Box className="flex">
        <FilterBar />
        <Button onClick={handleClick} variant="contained" endIcon={<Add />}>
          Add task
        </Button>
      </Box>

      {/* <AddTaskModal
        open={modalOpen}
        handleClose={closeModel}
        handleSuccess={handleSaveTask}
      /> */}
      <AddModal
        open={modalOpen}
        handleClose={closeModel}
        handleSuccess={handleSaveTask}
      />
    </Box>
  )
}

export default Navbar
