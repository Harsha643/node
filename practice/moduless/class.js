async function fun(){

    try{
        let response=await fetch("https://fakestoreapi.com/products")
        let data=await response.json()
      //   console.log(data)
        const men=data.forEach(element => {
         console.log(element)
         if(element.category=="men's clothing"){
            
         }
         
        });
   
      //   return men
             
// })
}
    catch(err){
        console.log(err)
    }

}
// fun()
// console.log(fun())
module.exports=fun()

// function otps() {
//     var otp=""
//  for (i=0;i<4;i++){
//     var n=Math.floor(Math.random()*10)
//     otp+=n
//  }
//  return otp
// }

// module.exports=otps();


// let http=require("http")

// let server=http.createServer((req,res)=>{


//         res.write("harsha")
//                 res.end()

   
// })

// server.listen(3001,()=>{
//     console.log("its running")
// })