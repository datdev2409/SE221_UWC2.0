import { Button, Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { setEmployees } from "../../context/employee/employeeActions"
import useEmployeeContext from "../../context/employee/employeeHook"
import { Add } from "@mui/icons-material"
import moment from "moment"
import { getAllEmployees } from "../../firebase/employee"
import AddModal from "./Modal/AddModal"

function EmployeeManagement() {
  const [employees, dispatch] = useEmployeeContext()
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    getAllEmployees().then(employees => dispatch(setEmployees(employees)))
  }, [dispatch])

  const columns = [
    { field: "fullname", headerName: "Fullname", width: 200 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "birthdate", headerName: "Birthdate", width: 150 },
    { field: "status", headerName: "Status", width: 100 }
  ]

  const rows = employees.map(employee => {
    return {
      ...employee,
      birthdate: moment(employee.birthdate).format('DD/MM/YYYY'),
      id: employee.name + employee.phone
    }
  })
  return (
    <div style={{ padding: 12 }}>
      <Box className="flex fx-end">
        <Button
          onClick={() => setModalOpen(true)}
          variant="contained"
          endIcon={<Add />}>
          Add employee
        </Button>
      </Box>

      <AddModal open={isModalOpen} handleClose={() => setModalOpen(false)} />

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

export default EmployeeManagement
