import React,{useState} from 'react'
import axios from "axios"
import "./admin.css"
import {useNavigate ,Link } from "react-router-dom"
const Login = ({ setLoginUser})=> {

  const history =  useNavigate ()
  const [ user, setUser] = useState({
      email:"",
      password:"",
  })
    const handleChange = e => {
      const name=e.target.name
      const value=e.target.value
      console.log(name)
      console.log(value)
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
    axios.post("http://localhost:9002/adminlogin", user)
    .then(res => {
        history('/menu')          
        setLoginUser(res.data.user)
        
    })
}

return (
  <div className='login'>
      {console.log("User", user)}
    <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
          <input type="password" name="password"  value={user.password} placeholder="Enter your Password"onChange={ handleChange } ></input>
          <div className="button" onClick={login}>Admin Login</div>
          
          <div>or</div>
          
          <div className="button" >
          <Link to="/adminregister" style={{ color: '#FFF',textDecoration: 'none' }}>Register</Link>
          </div>
          
  </div>
)
}

export default Login