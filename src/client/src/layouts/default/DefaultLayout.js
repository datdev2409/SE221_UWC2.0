import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"
import { Grid } from "@mui/material"


function DefaultLayout() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Header />
        <Outlet />
      </Grid>
    </Grid>
    // <div className={styles.container}>
    //   <div className={styles.sidebar}>
    //     <Sidebar />
    //   </div>
    //   <div className={styles.content}>
    //     <Header />
    //     <Outlet />
    //   </div>
    // </div>
  )
}

export default DefaultLayout
