import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
const CreatePost = () => {
  const navigate=useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    // if(!e.target.image||!e.target.posts) {
    //   alert("Sab Kuch daal be chomu!");
    //   return ;
    // }
    console.log(e.target);
    const formdata=new FormData(e.target);
    axios.post("https://srv-d992qqmcjfls73fjl8g0/createpost",formdata)
    .then((res)=> {
      console.log("Post Created!")
      navigate("/getpost")
      e.target.reset();
    }).catch((err)=>{
      alert("OOps! Error Creating posts!")
    }
    )
  }

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handlesubmit} style={{display:"flex",flexDirection:"column",gap:"20px"}}>

        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' placeholder='caption kya rkhna hai jaldi bol'/>
        <button type='submit' >Submit</button>

      </form>

    </section>
  )
}

export default CreatePost
