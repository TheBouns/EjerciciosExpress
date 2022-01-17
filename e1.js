const express = require("express");
const path = require ("path");
const app = express();
app.use(express.json());
const port = "3000";

app.listen(port,(error)=>{
    if(error){
        console.log("error, el puerto ya esta en uso");
    }
        else{
            console.log(`Servidor corriendo en el puerto: ${port}`)
        }
})

app.get("/",(req,res)=>{
    res.send("bienvenido")
    //res.redirect("https://www.youtube.com/watch?v=aC7uRn560BE")
})
app.get("/productos",(req,res)=>{
    res.send("Listado de productos")
})
app.post("/productos",(req,res)=>{
    res.send("crear un producto post")
})
app.put("/productos", (req,res)=>{
    res.send("actualizar un producto")
})
app.delete("/productos",(req,res)=>{
    res.send("borrar un producto")
})
app.get("/usuarios", (req,res)=>{
    res.send("listado de usuarios")
})
app.post("/usuarios" ,(req,res)=>{
    res.send("Crear un usuario")
})
app.put("/usuarios", (req,res)=>{
    res.send("actualizar un usuario")
})
app.delete("/usuarios", (req,res)=>{
    res.send("eliminar un usuario")
})