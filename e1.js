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