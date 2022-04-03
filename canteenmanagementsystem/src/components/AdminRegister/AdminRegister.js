import React,{useState} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import {useNavigate ,Link } from "react-router-dom"
import "./AdminRegister.css"
export default function Register() {
  const [ user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    reEnterPassword: ""
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
const register = () => {
  const { name, email, password, reEnterPassword } = user
  if( name && email && password && (password === reEnterPassword)){
      axios.post("http://localhost:9002/register", user)
      .then( res => {
          alert(res.data.message)
          this.props.history.push('/adminmenu')
      })
  } else {
      alert("invlid input")
  }
  
}

  return (
    <div>
      <div className="register">
      {console.log("User", user)}
            <h1>Admin Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name"onChange={ handleChange } ></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password"onChange={ handleChange } ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password"onChange={ handleChange } ></input>
            <div className="button" onClick={register}>Register</div>
            
            <div>or</div>
            <div className="button" >
            <Link to="/" style={{ color: '#FFF' }}>Login</Link>
            </div>
           
        </div>
    </div>
  )
}
