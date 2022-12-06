import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider
} from "react-router-dom"
import MCPProvider from "./context/MCP/MCPProvider"

import './index.css'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <MCPProvider>
    <RouterProvider router={router} />
  </MCPProvider>
  // </React.StrictMode>
)
