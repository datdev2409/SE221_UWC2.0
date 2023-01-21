import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider
} from "react-router-dom"
import MCPProvider from "./context/MCP/MCPProvider"
import EmployeeProvider from "./context/employee/EmployeeProvider"

import './index.css'
import router from './router'
import { UserProvider } from "./context/user"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <UserProvider>
    <EmployeeProvider>
      <MCPProvider>
        <RouterProvider router={router} />
      </MCPProvider>
    </EmployeeProvider>
  </UserProvider>
  // </React.StrictMode>
)
