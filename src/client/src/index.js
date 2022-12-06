import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider
} from "react-router-dom"
import MCPProvider from "./context/MCP/MCPProvider"
import EmployeeProvider from "./context/employee/EmployeeProvider"

import './index.css'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <EmployeeProvider>
    <MCPProvider>
      <RouterProvider router={router} />
    </MCPProvider>
  </EmployeeProvider>
  // </React.StrictMode>
)
