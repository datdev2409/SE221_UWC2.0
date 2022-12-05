import routes from "../../../../config/routes"
import { Link, useLocation } from "react-router-dom"
import { ButtonGroup, Box, Button } from "@mui/material"
import { BorderAll, CalendarMonth} from "@mui/icons-material"

const viewOption = [
  {
    path: routes.dashboard__board,
    text: "Board",
    Icon: <BorderAll />
  },
  {
    path: routes.dashboard__timeline,
    text: "Timeline",
    Icon: <BorderAll />
  },
  {
    path: routes.dashboard__calendar,
    text: "Calendar",
    Icon: <CalendarMonth />
  }
]

const optionStyle = {
  color: "#000",
  borderRadius: '0px',
  borderBottom: '2px solid #000',
}

const activeOption = {
  color: '#1a73e8',
  fontWeight: 500,
  borderRadius: '0px',
  borderBottom: '2px solid #1a73e8',
}

function ViewMenu() {
  const {pathname} = useLocation()

  return (
    <Box variant="text">
      {viewOption.map(({ path, text, Icon }) => (
        <Button
          key={text}
          sx={path === pathname ? activeOption : optionStyle}
          component={Link}
          to={path}
          startIcon={Icon}>
          {text}
        </Button>
      ))}
    </Box>
  )
}

export default ViewMenu
