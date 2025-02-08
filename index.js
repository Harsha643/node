const http =require("http")
const server=http.createServer((req,res)=>{
    res.write("<h1>harsha</h1>")
    res.end()
})
server.listen(3000,()=>{
    console.log("it run on 3000 port no ")
})