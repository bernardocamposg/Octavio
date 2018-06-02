var path = require("path");
var express = require("express");
var http = require('http');

var app = express();

app.use(express.static(path.resolve(__dirname,"public")));
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("index");
});
app.get("/",function(req, res){
    res.send("/armas.ejs")
});
app.get("/armas",function(req, res){
    res.render("armas")
});
app.get("/",function(req, res){
    res.render("/clases.ejs")
});
var publicPath = path.resolve(__dirname,'public');
app.use('/recursos',express.static(publicPath));
app.get("/clases",function(req, res){
    res.render("clases")
    var app = express();
app.use((Request,Response) => {
    Response.writeHead(200,{'Content-Type':'text/plain'});
    Response.end('No se encuentra ningun archivo');
});
});
app.get("/",function(req, res){
    res.render("/victimas.ejs")
});
app.get("/victimas",function(req, res){
    res.render("victimas")

    var IP_Malvada = "192.168.1.162";
    app.use((request,Response,next)=>{
        if (request.ip === IP_Malvada){
            Response.status(401).send("No se pudo ingresar");
        }else{
            next();
        }
    });
});
app.use(function(req,res){
    res.status(404).render("404");
});
app.listen(3000);

