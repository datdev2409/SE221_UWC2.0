import routes from "./config/routes"
import { createBrowserRouter as createRouter } from "react-router-dom"

import App from "./App"
import DefaultLayout from "./layouts/default/DefaultLayout"
import Dashboard from "./pages/Dashboard"
import BoardView from "./pages/Dashboard/BoardView"
import CalendarView from "./pages/Dashboard/CalendarView"
import Timeline from "./pages/Dashboard/Timeline"
import MCPManagement from "./pages/MCPManagement"
import MCPProvider from "./context/MCP/MCPProvider"
import EmployeeManagement from "./pages/EmployeeManagement"
import RegisterPage from "./pages/Dashboard/Register"
import LoginPage from "./pages/Dashboard/Login"
import PrivateRoute from "./components/PrivateRoute"

const router = createRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: routes.dashboard,
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
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
        element: <PrivateRoute><EmployeeManagement /></PrivateRoute>
      },
      {
        path: routes.vehicle,
        element: <App />
      },
      {
        path: routes.area_mcps,
        element: <PrivateRoute><MCPManagement /></PrivateRoute>
      }
    ]
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router
