const express = require("express");
const path = require ("path");
const app = express();
app.use(express.json());
const port = "3000";

app.listen(port,()=>{
    try {
        console.log(`Server listen at port ${port}`)
    } catch (error) {
        console.log(error);
    }
    
})