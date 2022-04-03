const express = require('express')
const  cors = require('cors')
const mongoose= require('mongoose')

// const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//schema create
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// new model create
const User = new mongoose.model("User", userSchema)
app.post("/login", (req, res)=> {
    const { email, password} = req.body
   User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const Admin = new mongoose.model("Admin", adminSchema)

app.post("/adminlogin", (req, res)=> {
    const { email, password} = req.body
    Admin.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "Admin not registered"})
        }
    })
}) 
app.post("/adminregister", (req, res)=> {
    const { name, email, password} = req.body
    Admin.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
app.listen(9003,() => {
    console.log("BE started at port 9003")
})