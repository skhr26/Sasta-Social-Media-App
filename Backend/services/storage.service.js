const ImageKit=require("@imagekit/nodejs")
const imagekit=new ImageKit({
  privateKey:process.env.CLOUD_URL
})

async function uploadFile(buffer) {
  const result= await imagekit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'file-name.jpg',
});
  return result;
}


module.exports=uploadFile