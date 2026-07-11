const ImageKit=require("@imagekit/nodejs")

const imagekit=new ImageKit({
  privateKey:"private_/uuBq6lgnC76VBoR4VnoFrPrE/o="
})

async function uploadFile(buffer) {
  const result= await imagekit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'file-name.jpg',
});
  return result;
}


module.exports=uploadFile