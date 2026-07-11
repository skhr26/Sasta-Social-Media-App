const express=require("express");
const app=express();
const multer=require("multer")
const uploadFile=require("./services/storage.service")
const cors=require("cors");
const postModel=require("./models/post.model")
const upload=multer({storage:multer.memoryStorage()});
require("dotenv").config()
app.use(express.json());
app.use(cors());

const connectdb=require("./db/db")

connectdb()

app.post("/createpost",upload.single("image"),async(req,res)=> {
  // req.file mai hi image ka buffer aur caption dono arhe the to wo ek chiz ho gyi 

  // image kit ne tumhe url bna ke diya and now you have to use it so use it carefully 
  const result=await uploadFile(req.file.buffer)
  console.log(result);
  const post=await postModel.create({
    image:result.url,
    caption:req.body.caption
  })


  return res.status(201).json({
    message:"Post Created successfully",
    post
  })
})


app.get("/getposts",async (req,res)=> {
  const posts=await postModel.find();
  console.log(posts);
  return res.status(200).json({
    message:"got the posts!",
    posts
  })




})

app.listen(3000,()=> {
  console.log("server started !")
})