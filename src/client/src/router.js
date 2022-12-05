import routes from "./config/routes"
import { createBrowserRouter as createRouter } from "react-router-dom"

import App from './App'
import DefaultLayout from "./layouts/default/DefaultLayout";
import Dashboard from "./pages/Dashboard"
import BoardView from "./pages/Dashboard/BoardView";
import CalendarView from './pages/Dashboard/CalendarView'
import Timeline from './pages/Dashboard/Timeline'

const router = createRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: routes.dashboard,
        element: <Dashboard />,
        children: [
          {
            path: routes.dashboard__board,
            element: <BoardView />
          },
          {
            path: routes.dashboard__calendar,
            element: <CalendarView />
          },
          {
            path: routes.dashboard__timeline,
            element: <Timeline />
          }
        ]
      },
      {
        path: routes.employee,
        element: <App />
      },
      {
        path: routes.vehicle,
        element: <App />
      },
      {
        path: routes.area_mcps,
        element: <App />
      }
    ]
  }
])

export default router
