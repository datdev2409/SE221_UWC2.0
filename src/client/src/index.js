import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter as createRouter,
  RouterProvider
} from "react-router-dom"

import App from './App'
import GlobalStyles from "./components/GlobalStyles"
import DefaultLayout from "./layouts/DefaultLayout"

const router = createRouter([
  {
    path: "/",
    element: <DefaultLayout />,
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
    <GlobalStyles>
      <RouterProvider router={router} />
    </GlobalStyles>
  </React.StrictMode>
)
