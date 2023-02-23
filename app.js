const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "src/views/home.html"));
});

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname, "src/views/register.html"));
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "src/views/logIn.html"));
});

app.listen(3000, function(){
    console.log("Servidor escuchando en le puerto 3000");
}); 