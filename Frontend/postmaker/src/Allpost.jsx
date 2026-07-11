import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios"
const AllPost = () => {
  const [posts,setPosts]=useState([{
    _id:"1",
    image:"https://ik.imagekit.io/skhr26/file-name_oi8zNdHEG.jpg",
    caption:"this is my first post"
    // basic structure of How will it look
  }]);
  

  useEffect(()=> {
    axios.get("https://sasta-social-media-app.onrender.com/getposts").then((res)=> {
      setPosts(res.data.posts);
    })
      // ab yaad karo ham yehi kiya karte the postman pe whi hame karna hai ffontend pe 
  },[])

  return (
    <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"40px"}}>
      {
        // this is conditinal rendering 
        // ternary operator ki tarah hoti hai
        (posts.length>0) ? (
          posts.map((posts)=> (
            <div key={posts._id} className='post-card' style={{border:"2px solid grey"}}>
              <img style={{height:"280px"}} src={posts.image} alt={posts.caption} />
              <p>{posts.caption}</p>
            </div>
          ))
        ): (
          <h1>No Posts Available Right Now</h1>
        )
      }
      </div>
      
  )
}

export default AllPost
