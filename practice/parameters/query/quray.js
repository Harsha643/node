let http=require("http")
 let url=require("url")


 let server=http.createServer( async(req,res)=>{

   let ress=url.parse(req.url,true)
   console.log(ress.query.cat)


    let response= await fetch("https://fakestoreapi.com/products")
    let data= await response.json()

let result=[]

  let parseurl=url.parse(req.url,true)

  if(parseurl.query.cat=="m"){
    let mens=data.filter((val)=>{
      return val.category=="men's clothing"
    })
  //      res.write(JSON.stringify(mens))
  //  res.end()
  result=[...mens]
  }else if(parseurl.query.cat=="w"){
    let womens=data.filter((val)=>{
      return val.category=="women's clothing"
    })
  result=[...womens]

  //      res.write(JSON.stringify(womens))
  //  res.end()

  }else if(parseurl.query.cat=="j"){
    let jel=data.filter((val)=>{
      return val.category=="jewelery"
    })
  result=[...jel]

  //      res.write(JSON.stringify(jel))
  //  res.end()

  }else if(parseurl.query.cat=="e"){
    let ele=data.filter((val)=>{
      return val.category=="electronics"
    })
  result=[...ele]

  //      res.write(JSON.stringify(ele))
  //  res.end()

  }else{
  //      res.write(JSON.stringify(data))
  //  res.end()
  }

 if(parseurl.query.sort=="lh"){
  result.sort((a,b)=>{
    return a.price-b.price

  })
  res.write(JSON.stringify(result))
  res.end()
 }else if(parseurl.query.sort=="hl"){
  result.sort((a,b)=>{
    return b.price-a.price
  })
  res.write(JSON.stringify(result))
  res.end()
 }
else{
  res.write(JSON.stringify(result))
  res.end()

}
 })
 
 server.listen(3000,()=>{
    console.log("vasthunna chudu mawa chrome open cheesi ")
 })