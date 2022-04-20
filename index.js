const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB")
const userRoutes = require("./routes/userRoutes")

connectDB()
const app = express();


//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRoutes)

//home route
app.get("/",(req,res)=>{
    res.send("<h1>WELCOME TO OUR SCHOOL API</h1>")
})

const PORT = process.env.PORT||5000

app.listen(PORT, ()=>{
    console.log("server is active")
})