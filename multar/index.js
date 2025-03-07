let express=require("express")
let app = express()
let fs = require("fs")
let path=require("path")
let multer=require("multer")
let myPath = path.join(__dirname, "media"); 
if (!fs.existsSync(myPath)) {
    fs.mkdir(myPath, () => {
     
      console.log("folder created");
    });
  }else{
    console.log(` ${myPath} this file name already existed ` )
  }

let filefilter=(req,file,cb)=>{
    let allowType=["image/jpg","image/jpeg","image/png"]
    if(allowType.includes(file.mimetype)){
        cb(null,true)
    }else{
        cd(new Error ("invalid file type "))
    }
}
let fileSizeFilter = (req, file, cb) => {
    let maxSizeKB = 50; 
    let minSizeKB = 30; 
  };
let storage=multer.diskStorage({
    destination:function (req,file,cb){cb(null,myPath)},
    filename:function (req,file,cb){cb(null,file.originalname)}
})
let upload=multer({storage:storage,filefilter:filefilter,limits: { fileSize: 50 * 1024 }})
app.post("/data",upload.single("profile_pic"),(req,res)=>{
    console.log(req.file)
    res.send("data is submited")
})
app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        if(err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE'){
            res.status(400).send("File size must be between 30 and 50 KB");
        } else {
            res.status(400).send("only jpg.jpeg/png accepted or file size error");
        }
    } else {
        next();
    }
});
app.listen(3123,()=>{
    console.log("server is running on port no :3123")
})