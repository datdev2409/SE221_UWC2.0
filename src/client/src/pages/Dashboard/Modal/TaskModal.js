import {useState, useEffect} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText} from '@mui/material'
import {getMCP} from '../../../firebase/MCP'
import {getDate} from '../../../utils/dateConvert'
import SimpleMap from '../../../components/Map'

function TaskModal({ task, open, handleClose }) {
  const [MCP, setMCP] = useState({})

  useEffect(() => {
    getMCP(task.MCPId)
      .then(MCP => setMCP(MCP))
  }, [task.MCPId])

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{task?.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Employee: <strong>{task?.employee}</strong>
        </DialogContentText>
        <DialogContentText>
          From <strong>{getDate(task?.timeStart)}</strong> to <strong>{getDate(task.timeEnd)}</strong>
        </DialogContentText>
        <DialogContentText>
          Address: <strong>{task?.address}</strong>
        </DialogContentText>
      </DialogContent>
      <SimpleMap lat={MCP?.location?._lat} lng={MCP?.location?._long} />
    </Dialog>
  )
}

export default TaskModal
