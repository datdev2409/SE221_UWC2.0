import {
  Button,
  Dialog,
  Box,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  Input,
  ButtonGroup,
  LinearProgress,
  Autocomplete
} from "@mui/material"
import DateInput from "../DateInput"
import { useEffect, useState } from "react"
import useTaskContext from "../../context/task/taskHook"
import { createTask } from "../../context/task/taskActions"
import useMCPContext from "../../context/MCP/MCPHook"
import { getAllMCPs } from "../../firebase/MCP"
import { setMCPs } from "../../context/MCP/MCPActions"

function AddTaskModal({ open, handleClose, handleSuccess }) {
  const activeBtn = {
    color: "#1a73e8",
    backgroundColor: "rgba(26, 115, 232, 10%)"
  }

  const [MCPName, setMCPName] = useState([])
  const dispatch = useTaskContext()[1]
  const [type, setType] = useState("janitor")
  const [timeStart, setTimeStart] = useState(Date.now())
  const [timeEnd, setTimeEnd] = useState(Date.now())
  const [name, setName] = useState("")
  const [team, setTeam] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllMCPs().then( MCPs => setMCPName(MCPs.map(MCP => MCP.name)))
  }, [dispatch])

  const handleSave = async () => {
    setLoading(true)
    dispatch(
      createTask({
        name,
        type,
        timeStart,
        timeEnd,
        team,
        location,
        description,
        status: "todo"
      })
    )
    setTimeout(() => setLoading(false), 1000)
    handleSuccess()
  }

  return (
    <Dialog maxWidth="sm" fullWidth={true} open={open} onClose={handleClose}>
      {loading && <LinearProgress />}
      <DialogTitle>
        <FormControl fullWidth={true}>
          <Input
            sx={{ fontSize: "24px", fontWeight: 500 }}
            id="title-input"
            fullWidth
            placeholder="Add task title"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </FormControl>
      </DialogTitle>
      <DialogContent component="form">
        <ButtonGroup color="inherit">
          <Button
            size="small"
            onClick={() => setType("janitor")}
            sx={type === "janitor" ? activeBtn : {}}>
            Janitor task
          </Button>
          <Button
            size="small"
            onClick={() => setType("collector")}
            sx={type === "collector" ? activeBtn : {}}>
            Collector task
          </Button>
        </ButtonGroup>

        <TextField
          size="small"
          margin="normal"
          fullWidth
          label="Team"
          onChange={(e) => setTeam(e.target.value)}
          value={team}
        />

        <Box className="flex g-12 mt-12">
          <DateInput
            time={timeStart}
            label="Start date"
            handleChange={setTimeStart}
          />
          <DateInput
            time={timeEnd}
            label="End date"
            handleChange={setTimeEnd}
          />
        </Box>

        <Autocomplete
          sx={{marginTop: '12px'}}
          options={MCPName}
          renderInput={(params) => <TextField {...params} label="Location" />}
          onChange={(e) => setLocation(e.target.value)}
        />

        <TextField
          size="small"
          multiline
          rows={4}
          margin="dense"
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTaskModal
