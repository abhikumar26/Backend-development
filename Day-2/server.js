import express from 'express'
 
import connectdb from './database/mongodb.js';
import router from './routes/routes.js';


const app = express()
app.use(express.json())
app.use(router)

const port = 4000;
connectdb()

app.listen(port,()=>{
    console.log("server has started on Port",port);    
})
 