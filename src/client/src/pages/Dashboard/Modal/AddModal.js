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
  InputLabel,
  Select,
  MenuItem
} from "@mui/material"
import DateInput from "../../../components/DateInput"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import useTaskContext from "../../../context/task/taskHook"
import { createTask } from "../../../context/task/taskActions"
import { getAllMCPs, getMCP } from "../../../firebase/MCP"
import { getAllEmployees, getEmployee } from "../../../firebase/employee"

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
      <RadioGroup
        row
        onChange={(e) => handleChange(e.target.value)}
        defaultValue="janitor"
        name="type_input">
        <FormControlLabel
          value="janitor"
          control={<Radio />}
          label="Janitor task"
        />
        <FormControlLabel
          value="collector"
          control={<Radio />}
          label="Collector task"
        />
      </RadioGroup>
    </FormControl>
  )
}

function AddModal({ open, handleClose }) {
  const [timeStart, setTimeStart] = useState(Date.now())
  const [timeEnd, setTimeEnd] = useState(Date.now())
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState("janitor")
  const [MCPList, setMCPList] = useState([])

  const [employees, setEmployees] = useState([])
  const [employeeId, setEmployeeId] = useState("")

  const [MCPId, setMCPId] = useState("")
  const [MCPIds, setMCPIds] = useState([]) //use for collector task

  const dispatch = useTaskContext()[1]

  // Load MCP information
  useEffect(function () {
    getAllMCPs().then((MCPList) => setMCPList(MCPList))
    getAllEmployees().then((employees) => setEmployees(employees))
  }, [])

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      status: "todo"
    },
    onSubmit: (values) => {
      setLoading(true)
      const task = {
        ...values,
        employeeId,
        timeStart,
        timeEnd,
        type
      }

      console.log(MCPIds)
      getEmployee(employeeId).then((employee) => {
        if (type === 'janitor') {
          getMCP(MCPId).then(MCP => {
            dispatch(createTask({ ...task, MCPId,  employee: employee.fullname, address: MCP.address }))
            handleClose()
          })
        }
        else {
          getMCP(MCPIds[0]).then(MCP => {
            dispatch(createTask({ ...task, MCPIds, employee: employee.fullname, address: MCP.address }))
            handleClose()
          })
        }
      })
      setTimeout(() => setLoading(false), 1000)
    }
  })

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      {loading && <LinearProgress />}
      <FormControl sx={{ p: 2, mt: 1 }}>
        <h2 style={{ marginBottom: "12px" }}>
          Add {type === "janitor" ? "janitor" : "collector"} task
        </h2>
        <TypeSelectGroup value={type} handleChange={setType} />
        <TextInput formik={formik} label="Name" name="name" />
        <Box className="flex g-24 mt-12 fx-start">
          <DateInput
            value={timeStart}
            label="Start"
            handleChange={setTimeStart}
          />
          <DateInput value={timeEnd} label="End" handleChange={setTimeEnd} />
        </Box>

        <FormControl fullWidth sx={{ marginTop: "12px" }}>
          <InputLabel id="employee-label">Employee</InputLabel>
          <Select
            labelId="employee-label"
            label="Employee"
            // sx={{marginTop: '12px'}}
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}>
            {employees.map(({ id, fullname }) => (
              <MenuItem key={id} value={id}>
                {fullname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box hidden={type==='collector'}>
          <FormControl
            fullWidth
            sx={{ marginTop: "12px" }}>
            <InputLabel id="mcp-label">MCP</InputLabel>
            <Select
              labelId="mcp-label"
              label="MCP"
              value={MCPId}
              onChange={(e) => setMCPId(e.target.value)}>
              {MCPList.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box hidden={type==='janitor'}>
          <FormControl
            fullWidth
            sx={{ marginTop: "12px" }}>
            <InputLabel id="mcp-label">MCP</InputLabel>
            <Select
              multiple
              labelId="mcp-label"
              label="MCP"
              value={MCPIds}
              onChange={(e) => setMCPIds(e.target.value)}>
              {MCPList.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TextInput formik={formik} label="Description" name="description" />
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
