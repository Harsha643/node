
let http=require("http")
let server=http.createServer((req,res)=>{
    if(req.method=="POST"){
        res.setHeader("harsha","vardhan")
        res.statusCode=404
        res.end()
    }else{
        res.end("hello")
    }
})

server.listen(3004,()=>{
    console.log("it running")
})