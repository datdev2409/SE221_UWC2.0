import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter as createRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'
import App from './App'
import HomePage from './pages/homepage'

const router = createRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/employee",
        element: <App />
      },
      {
        path: "/vehicle",
        element: <App />
      },
      {
        path: "/area",
        element: <App />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
