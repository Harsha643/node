

let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
let body=""
    req.on("data",(chunk)=>{
        body+=chunk
    })
    req.on("end",()=>{
        console.log(body)
        fs.writeFile("db.json",body,(err)=>{
            if(err){
                res.write(err.message)
                res.end()
            }
            else{
                res.write(body)
                res.end()
            }
        })
        res.end(body)
    })
})
server.listen(3001,()=>{
    console.log("vasthunna mawa")
})