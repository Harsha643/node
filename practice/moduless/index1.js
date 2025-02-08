
let http=require("http")
// let fun=require("./class.js")
// console.log(fun())

let server=http.createServer(async (req,res)=>{


    try{
        let response=await fetch("https://fakestoreapi.com/products")
        let data=await response.json()
        // console.log(data)
        let men=data.filter(element => {
            // console.log(element)
                    if(element.category==="men's clothing")

                        {
                           
       res.write(`<div class="container" style=" width="300px" "><img src="${element.image}"  width="300px"/> <h1>${element.title}</h1>  <h1>${element.price}</h1>  <h2>${element.category}</h2> <h2>${element.rating.rate}</h2> <p>${element.description}</p>   </div> `)
       return element
                    }

                
       
        });
        res.write(JSON.stringify(men))
                res.end()

    }
    catch(err){
        console.log(err)
    }

})
server.listen(3001,()=>{
    console.log("its running")
})


let servers=http.createServer(async (req,res)=>{


    try{
        let response=await fetch("https://fakestoreapi.com/products")
        let data=await response.json()
        // console.log(data)
        let electronics=data.filter(element => {
            // console.log(element)
                    if(element.category==="electronics")
                        {
       res.write(`<div class="container" style=" width="300px" "><img src="${element.image}"  width="300px"/> <h1>${element.title}</h1>  <h1>${element.price}</h1>  <h2>${element.category}</h2> <h2>${element.rating.rate}</h2> <p>${element.description}</p>   </div> `)
       return element
                    }

       
        });
        res.write(JSON.stringify(electronics))
        res.end()

    }
    catch(err){
        console.log(err)
    }

})
servers.listen(3002,()=>{
    console.log("its running")
})


// var http = require("http");
// var generateOTP = require("./class.js")
// // console.log(generateOTP)
// var server = http.createServer((req,res)=>{
//     // var generateOTP = require("./class.js")

//     res.write(generateOTP)
//     res.end()
// });


// server.listen(3003,()=>{
//     console.log("servere created successfully")
// })



let serve=http.createServer(async (req,res)=>{


    try{
        let response=await fetch("https://fakestoreapi.com/products")
        let data=await response.json()
        // console.log(data)
        let women=data.filter(element => {
            // console.log(element)
                    if(element.category==="women's clothing")
                        {
       res.write(`<div class="container" style=" width="300px" "><img src="${element.image}"  width="300px"/> <h1>${element.title}</h1>  <h1>${element.price}</h1>  <h2>${element.category}</h2> <h2>${element.rating.rate}</h2> <p>${element.description}</p>   </div> `)
       return element
                    }
        });
        res.write(JSON.stringify(women))
        res.end()

    }
    catch(err){
        console.log(err)
    }

})
serve.listen(3004,()=>{
    console.log("its running")
})

let servew=http.createServer(async (req,res)=>{


    try{
        let response=await fetch("https://fakestoreapi.com/products")
        let data=await response.json()
        // console.log(data)
        let women=data.filter(element => {
            // console.log(element)
                    if(element.category==="jewelery")
                        {
       res.write(`<div class="container" style=" width="300px" "><img src="${element.image}"  width="300px"/> <h1>${element.title}</h1>  <h1>${element.price}</h1>  <h2>${element.category}</h2> <h2>${element.rating.rate}</h2> <p>${element.description}</p>   </div> `)
       return element
                    }
        });
        res.write(JSON.stringify(women))
        res.end()

    }
    catch(err){
        console.log(err)
    }

})
servew.listen(3005,()=>{
    console.log("its running")
})