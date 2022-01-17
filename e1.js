const express = require("express");
const path = require ("path");
const app = express();
app.use(express.json());
const port = "3000";
const producto = {
    description: 'Productos',
        items: [
          { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
          { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
          {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
          {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
          {  id: 5,  nombre: 'Skin Valorant' , precio: 100},
          {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
        ]
      }
      
const items = producto.items;

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
//pillar los productos
app.get("/productos",(req,res)=>{
    res.json(producto)
})
//crear un nuevo producto
app.post("/productos",(req,res)=>{
    const newProduct = {
        id: items.length + 1,
        nombre : req.body.nombre,
        precio : req.body.precio
    }
    items.push(newProduct);
    res.send("crear un producto post")
})
app.put("/productos/:id", (req,res)=>{
    const found = items.some(item => item.id === +req.params.id);
    if(found){
       items.forEach(item =>{
           if(item.id === +req.params.id){
               item.nombre= req.body.nombre ? req.body.nombre: item.nombre,
               item.precio= req.body.precio ? req.body.precio : item.precio

            res.json(item) 
           }
       })
    }
})
app.delete("/productos/:id",(req,res)=>{
    const found = items.some( item=> item.id === +req.params.id)

    if(found){
        res.json( items.filter(item=> item.id !== +req.params.id))
    }else{
        res.status(404).json({msg:`Miembro con el id ${req.params.id} no encontrado`})
    }
})
app.get("/filtrar/:precio", (req,res)=>{
 let precio = req.params.precio;
 let sol = [];
 for(let i=0; i<items.length; i++){
     if(items[i].precio == precio)sol.push(items[i]);
 }
 res.json(sol)
})
app.get("/filtrar_entre",(req,res)=>{
    let filtrado = items.filter(item=> item.precio>=50 && item.precio<=250);
    res.json(filtrado)
})

app.get("/search/:id",(req,res)=>{
    let buscar = items.filter(item=> item.id == req.params.id);
    res.json(buscar)
})
app.get("/search_name/:nombre", (req,res)=>{
    let buscar = items.filter(item=>item.nombre== req.params.nombre);
    res.json(buscar)
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