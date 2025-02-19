let http=require("http")
 let url=require("url")


 let server=http.createServer( async(req,res)=>{

    let response= await fetch("https://fakestoreapi.com/products")
    let data= await response.json()
   
 console.log(data)
 
 })
 server.listen(3000,()=>{
    console.log("vasthunna chudu mawa chrome open cheesi ")
 })