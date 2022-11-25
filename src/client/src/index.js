import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter as createRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'

import App from './App'
import DefaultLayout from "./layouts/default/DefaultLayout";
import BoardView from "./pages/dashboard/BoardView";

const router = createRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <BoardView />
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
        path: "/area-and-mcps",
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
