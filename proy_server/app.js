const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { API_VERSION } = require("./config");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/api/v1/users",(req,res) =>{
    const { name , email,password } = req.body;
    const user = new userModel ({name , email,password});
    user.save ((err,user) =>{
        if(err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(user);
        }
    });
});

/* Configuración de los header HTTP */
module.exports = app;