import { Notifications, Settings } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

const header = {
  width: '100%',
  height: '80px',
  padding: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const headerControl = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px'
}

const headerTitle = {
  fontSize: '35px',
  fontWeight: '500'
}

function Header() {
  return (
    <Box sx={header}>
      <Typography sx={headerTitle} variant='h3'>Dashboard</Typography>
      <Box sx={headerControl}>
        <Notifications />
        <Settings />
        <Avatar sx={{bgcolor: deepOrange[500] }}>D</Avatar>
      </Box>
    </Box>
  )
}

export default Header
