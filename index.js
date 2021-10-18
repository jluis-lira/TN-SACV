//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const user = require('./Routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.get("/",index);
app.use("/user",user);

app.listen(process.env.PORT||3000,()=>{
    console.log("Server is running..");
});