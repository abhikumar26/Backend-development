import express from "express";
import route from './routes/userRoute.js'

const app = express()

import cors from 'cors'
app.use(cors())

app.use(route)
 
const port  = 4000



app.get('/',(req,res)=>{
    res.send("<h1>Welcome to backend</h1>")
}) 

app.listen(port, ()=>{
    console.log('server is running in port',port)
})