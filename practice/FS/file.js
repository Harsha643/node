// let fs=require("fs")
// fs.writeFileSync("./fs.txt","harsha")
// fs.appendFileSync("./fs.txt","vardhan")
// fs.appendFileSync("./fs.txt","  battu")
// let file=fs.existsSync("./fss.txt")
// fs.renameSync("./file.js","./fs.js")
// let data=fs.readFileSync("./fs.txt","utf-8")
// console.log(data)
// console.log(file)

let a= require("fs")

a.writeFileSync("./rme.txt","ramsita updaated")
// a.appendFileSync("./rme.txt","   i know this")
let ad=a.existsSync("./fs.js")
a.renameSync("./fs.js","index.js")
let data=a.readFileSync("./rme.txt","utf-8")
console.log(data)
console.log(ad)





