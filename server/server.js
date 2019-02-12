const express = require('express');
const mongoose = require('mongoose');
const db =require('./config/keys.js').mongoURI;
const bodyparser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5002;

const studentRoute = require('./routes/student.js');



app.use((bodyparser.urlencoded({extended:false})));
app.use(bodyparser.json());


mongoose.connect(db,{ useNewUrlParser: true }).then(
    ()=>{
        console.log("DB connected");
    }
).catch(
    (err) =>{
        console.log(err);
    }
)

app.get('/',(req,res)=>res.send("hello"));

app.use('/student',studentRoute);

app.listen(PORT,()=>console.log("Server started"));
