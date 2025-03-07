const express = require("express")
let app = express()

app.get("/",(req,res)=>{
    console.log("this ia a get ");
    
})
app.listen(3100,()=>{
    console.log("server is running");
    
})