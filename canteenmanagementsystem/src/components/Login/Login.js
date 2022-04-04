import React,{useState} from 'react'
import axios from "axios"
import {useNavigate ,Link } from "react-router-dom"
import "./login.css"

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
      axios.post("http://localhost:9002/login", user)
      .then(res => {       
        
        if (res.data.message === "Login Successfull") {
          
          history('/menu');
        }
        else {
          alert(res.data.message);
        }
          
         
          
      })
  }

  return (
    <div className='login'>
        {console.log("User", user)}
      <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  value={user.password} placeholder="Enter your Password"onChange={ handleChange } ></input>
            <div className="button" onClick={login}>Login</div>
            
            <div>or</div>
            
            <div className="button" >
            <Link to="/register" style={{ color: '#FFF' }}>Register</Link>
            </div>
            
    </div>
  )
}

export default Login