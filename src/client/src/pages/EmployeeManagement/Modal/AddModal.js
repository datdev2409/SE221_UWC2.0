import {
  Button,
  Dialog,
  FormControl,
  DialogActions,
  TextField,
  Box,
  LinearProgress,
  Autocomplete,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from "@mui/material"
import DateInput from "../../../components/DateInput"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import useTaskContext from "../../../context/task/taskHook"
import { createTask } from "../../../context/task/taskActions"
import { getAllMCPs } from "../../../firebase/MCP"
import useEmployeeContext from "../../../context/employee/employeeHook"
import { createEmployee } from "../../../context/employee/employeeActions"

function TextInput({ formik, label, name }) {
  return (
    <TextField
      size="small"
      margin="normal"
      fullWidth
      label={label}
      id={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
    />
  )
}

function TypeSelectGroup({ value, handleChange }) {
  return (
    <FormControl>
      <FormLabel>Employee type</FormLabel>
      <RadioGroup
        row
        onChange={(e) => handleChange(e.target.value)}
        defaultValue="janitor"
        name="type_input">
        <FormControlLabel
          value="janitor"
          control={<Radio />}
          label="Janitor"
        />
        <FormControlLabel
          value="collector"
          control={<Radio />}
          label="Collector"
        />
      </RadioGroup>
    </FormControl>
  )
}

function AddModal({ open, handleClose }) {
  const [birthdate, setBirthdate] = useState(Date.now())
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState("janitor")
  const dispatch = useEmployeeContext()[1]

  // Load MCP information
  // useEffect(function () {
  //   getAllMCPs().then((MCPList) => setMCPList(MCPList))
  // }, [])

  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      email: "",
      status: "free"
    },
    onSubmit: (values) => {
      setLoading(true)
      const employee = {...values, birthdate, type}
      dispatch(createEmployee(employee))
      setTimeout(() => setLoading(false), 1000)
      handleClose()
    }
  })

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      {loading && <LinearProgress />}
      <FormControl sx={{ p: 2, mt: 1 }}>
        <h2 style={{ marginBottom: "12px" }}>
          Add employee
        </h2>
        <TextInput formik={formik} label="Fullname" name="fullname" />
        <Box className="flex fx-start g-24" style={{marginTop: '12px'}}>
          <DateInput
            value={birthdate}
            label="Birthdate"
            handleChange={setBirthdate}
          />
          <Box>
            <TypeSelectGroup value={type} handleChange={setType} />
          </Box>
        </Box>
        <TextInput formik={formik} label="Email" name="email" />
        <TextInput formik={formik} label="Phone" name="phone" />

      </FormControl>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="contained" onClick={formik.handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddModal
