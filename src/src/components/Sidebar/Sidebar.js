import SidebarItem from "./SidebarItem"
import styles from "./Sidebar.module.css"
import { Box, MenuList, Typography } from "@mui/material"
import {
  DashboardCustomizeRounded,
  LocalShipping,
  PeopleAlt,
  Place
} from "@mui/icons-material"

const items = [
  {
    text: "Dashboard",
    path: "/",
    icon: <DashboardCustomizeRounded />
  },
  {
    text: "Employee",
    path: "/employee",
    icon: <PeopleAlt />
  },
  // {
  //   text: "Vehicle",
  //   path: "/vehicle",
  //   icon: <LocalShipping />
  // },
  {
    text: "Area & MCPs",
    path: "/area-and-mcps",
    icon: <Place />
  }
]

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Box sx={{ height: "80px", borderBottom: "2px solid #ddd" }}>
        <Typography
          sx={{ lineHeight: "80px", textAlign: "center", fontWeight: 700 }}
          color="#1A73E8"
          variant="h3">
          UWC.io
        </Typography>
      </Box>

      <MenuList>
        {items.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </MenuList>
    </div>
  )
}

export default Sidebar
