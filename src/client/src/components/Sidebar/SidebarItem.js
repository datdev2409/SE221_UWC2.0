import { Link, useLocation } from "react-router-dom"
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material"

function SidebarItem({ item }) {
  const { pathname } = useLocation()
  const activeStyle = {
    color: "#1A73E8",
    backgroundColor: "rgba(26, 115, 232, 10%)"
  }
  return (
    <MenuItem
      sx={item.path === pathname ? activeStyle : {}}
      component={Link}
      to={item.path}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.text}</ListItemText>
    </MenuItem>
  )
}

export default SidebarItem
