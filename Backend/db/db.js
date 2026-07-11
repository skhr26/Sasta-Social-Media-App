const mongoose=require("mongoose");


async function connectdb() {
  await mongoose.connect("mongodb+srv://shikharraiyat_db_user:75OYpvFg4TbWhjCe@cluster0.pwrseas.mongodb.net/")
console.log("connected db")

}

module.exports=connectdb



