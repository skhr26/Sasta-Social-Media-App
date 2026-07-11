const mongoose=require("mongoose");


async function connectdb() {
  await mongoose.connect(process.env.DB_URL)
console.log("connected db")

}

module.exports=connectdb



