import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function PrivateRoute({ children }) {
  let navigate = useNavigate()
  useEffect(() => {
    let user = sessionStorage.getItem("user")
    if (!user) navigate("/login")
  }, [navigate])

  return <div>{children}</div>
}

export default PrivateRoute
