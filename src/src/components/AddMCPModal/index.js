import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List
} from "@mui/material"
import useMCPContext from "../../context/MCP/MCPHook"
import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { createMCP } from "../../context/MCP/MCPActions"
import { LocationOn } from "@mui/icons-material"
import { GeoPoint } from "firebase/firestore"

function MapModal({ keyword }) {
  const API_KEY = "AIzaSyB29-zuKEZPel6IZ7_cT__LtQ_SDmcLMjs"
  return (
      <iframe
        tilte="map"
        width="100%"
        height="300"
        // style="border:0"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/search?key=${API_KEY}
    &q=${keyword ? keyword : ''}`}></iframe>
  )
}

function HintItem({ hint, setLocation, setAddress }) {
  const handleClick = () => {
    setAddress(hint.formatted_address)
    setLocation(new GeoPoint(hint.geometry.location.lat, hint.geometry.location.lng))
  }
  return (
    <ListItem onClick={handleClick} disablePadding>
      <ListItemButton>
        <ListItemIcon color="error">
          <LocationOn />
        </ListItemIcon>
        <ListItemText>{hint.formatted_address}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

function AddMCPModal({ open, handleClose }) {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [hints, setHints] = useState([])
  const [location, setLocation] = useState({})
  const dispatch = useMCPContext()[1]

  useEffect(() => {
    setName('')
    setAddress('')
    setHints([])
  }, [])

  const handleSave = () => {
    dispatch(
      createMCP({
        id: name + address,
        name,
        address,
        location,
        status: 0
      })
    )
    handleClose()
  }

  const handleSearchCode = () => {
    const addressStr = address.split(" ").join("+")
    const key = "AIzaSyB29-zuKEZPel6IZ7_cT__LtQ_SDmcLMjs"
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${key}`
    console.log(URL)
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setHints(data.results)
      })
  }

  const handleChange = (e) => {
    setAddress(e.target.value)
    handleSearchCode()
  }

  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle sx={{ paddingBottom: "0px" }}>Add MCP</DialogTitle>
      <Box component="form" sx={{ p: 2 }}>
        <TextField
          sx={{ marginBottom: 2 }}
          fullWidth={true}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box className="flex fy-center g-12">
          <TextField
            sx={{ marginBottom: 2 }}
            fullWidth={true}
            label="Address"
            variant="outlined"
            value={address}
            onChange={handleChange}
          />
        </Box>
        <List>
          {hints.map((addr) => (
            <HintItem
              setLocation={setLocation}
              setAddress={setAddress}
              hint={addr}
            />
          ))}
        </List>
        {address && <MapModal keyword={address} />}
        
      </Box>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMCPModal
