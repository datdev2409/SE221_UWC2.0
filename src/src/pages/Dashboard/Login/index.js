import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import {
  Alert,
  Button,
  FormControl,
  Box,
  Link,
  Paper,
  TextField
} from "@mui/material"
import { signIn } from "../../../firebase/auth"
import { useUserValue } from "../../../context/user"
import { Link as RouterLink, useNavigate } from "react-router-dom"

function TextInput({ formik, label, name, type }) {
  return (
    <TextField
      size="small"
      margin="normal"
      fullWidth
      type={type}
      label={label}
      id={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
    />
  )
}

function LoginPage() {
  const [error, setError] = useState("")
  const [user, setUser] = useUserValue()
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('user')) navigate('/') 
  }, [user, navigate])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      signIn(values.email, values.password)
        .then((res) => {
          setUser(res.user)
          sessionStorage.setItem('user', res.user.uid)
          navigate('/')
        })
        .catch((err) => {
          setError("Invalid email or password")
          console.log(err)
        })
    }
  })

  return (
    <Paper component="form" className="form-center">
      <FormControl fullWidth>
        <h2>Login</h2>
        {error && <Alert style={{marginTop: '12px'}} severity="error">{error}</Alert>}
        <TextInput formik={formik} label="Email" name="email" />
        <TextInput
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Button variant="contained" onClick={formik.handleSubmit}>
          Login
        </Button>
      </FormControl>
      <Box sx={{marginTop: '18px'}} >
        <Link component={RouterLink} to='/register'>Don't have an account</Link>
      </Box>
    </Paper>
  )
}

export default LoginPage
