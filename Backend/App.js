const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();

const app=express();

app.use(bodyParser.json());
const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log("Server started on port : ",port);
})
