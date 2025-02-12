// let http=require("http")
// // let New=require("./index1.js")

// let server=http.createServer( async(req,res)=>{

// if(req.method=="GET"){

//     let response=  await fetch("https://fakestoreapi.com/products")
//     let data=await response.json()
//     res.write(JSON.stringify(data))
    

// }else if(req.method=="POST"){
//     let rrw=  await fetch("https://dummyjson.com/quotes")
//     let d=await rrw.json()
//  res.write(JSON.stringify(d))

// }else{
//     console.log("you can choose only get or post methods")
//     res.write("you can choose only get or post methods")
// }
// res.end()


// })
// server.listen(30001,()=>{
//     console.log(" it running")
// })



let http=require("http")


let server=http.createServer( async(req,res)=>{
    res.setHeader('Content-Type', 'application/json'); 
    console.log(req.method)
if(req.method=="GET"){

    let response=  await fetch("https://fakestoreapi.com/products")
    let data=await response.json()
    res.write(JSON.stringify(data))
    

}else if(req.method=="POST"){
    let rrw=  await fetch("https://dummyjson.com/quotes")
    let d=await rrw.json()
 res.write(JSON.stringify(d))

}else{
    console.log("you can choose only get or post methods")
    res.write("you can choose only get or post methods")
}
res.end()


})
server.listen(30001,()=>{
    console.log(" it running")
})
