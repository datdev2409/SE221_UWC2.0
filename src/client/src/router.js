import routes from "./config/routes"
import { createBrowserRouter as createRouter } from "react-router-dom"

import App from './App'
import DefaultLayout from "./layouts/default/DefaultLayout";
import BoardView from "./pages/dashboard/BoardView";
import Dashboard from "./pages/dashboard/Dashboard"
import CalendarView from "./pages/dashboard/CalendarView"
import Timeline from "./pages/dashboard/Timeline";

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
            path: routes.dashboard__timeline,
            element: <Timeline />
          },
          {
            path: routes.dashboard__calendar,
            element: <CalendarView />
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
