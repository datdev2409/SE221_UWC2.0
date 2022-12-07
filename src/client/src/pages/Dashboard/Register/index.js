import React, { useState } from "react"
import { useFormik } from "formik"
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Link,
  Paper,
  TextField
} from "@mui/material"
import { register } from "../../../firebase/auth"
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

function RegisterPage() {
  const [error, setError] = useState("")
  const [user, setUser] = useUserValue()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      register(values.email, values.password)
        .then((res) => {
          console.log(res.user)
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
        <h2>Register</h2>
        {error && <Alert style={{marginTop: '12px'}} severity="error">{error}</Alert>}
        <TextInput formik={formik} label="Email" name="email" />
        <TextInput
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Button variant="contained" onClick={formik.handleSubmit}>
          Register
        </Button>
      </FormControl>
      <FormHelperText>Already have an account? <Link component={RouterLink} to='/login'>Login</Link></FormHelperText>
    </Paper>
  )
}

export default RegisterPage
