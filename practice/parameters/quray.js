let http=require("http")
 let url=require("url")


 let server=http.createServer( async(req,res)=>{



   let ress=url.parse(req.url,true)
   console.log(ress.query.cat)

    let response= await fetch("https://fakestoreapi.com/products")
    let data= await response.json()
   //  console.log(data)
   res.write(JSON.stringify(data))
   res.end()
 })
 server.listen(3000,()=>{
    console.log("vasthunna chudu mawa chrome open cheesi ")
 })