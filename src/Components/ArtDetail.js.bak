import React from 'react'
import logo from '../Components/1.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const ArtDetail = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { id } = useParams()
    const [comment,setComment] = useState("")
    const [arts,setArts] = useState([]);
	const [update,setUpdate] = useState(false);
    const [img, setImg] = useState("")
    const [comments,setComments] = useState([])
    
    useEffect(() => {
		axios.get(`https://shielded-wave-13203.herokuapp.com/api/arts/${id}`)
      .then(res => {
        //console.log(res.data)
		setArts(res.data)

        setImg(res.data.img)
		setUpdate(true)
		console.log(arts)})
        
        axios.get(`https://shielded-wave-13203.herokuapp.com/api/comments/comment/${id}`)
        .then(res=>{
            console.log(res.data)
            setComments(res.data)
        })
        
      
		
	  },[update]);
    
    function commentChangeHandler(e){
        setComment(e.target.value)
        console.log(comment)
    }
    
    function onSubmitCommentHandler(e){
        axios.post(`https://shielded-wave-13203.herokuapp.com/api/comments/newcomment`,{"user_name":user.nickname,artId:id,comment:comment})
      .then(res => {
        console.log(res)
        setComment("")
      })
    }
    
  return (
    <div>
        <section className="heading">
            <img src={img} alt="" />
        </section>
        <br /> <br />
        <section className="commentsection">
            <textarea value={comment} onChange = {(e)=>commentChangeHandler(e)} name="" className='comment' id="" cols="30" rows="10" placeholder='Share your Thoughts here' style={{width: '90%', maxWidth: '100%', padding: '20px 25px'}}></textarea>
        </section>
        <br />
        <button onClick = {(e)=>onSubmitCommentHandler(e)} className="btn btn-primary">Submit</button>
        <div className="commentbox"><br />
        <span>Comments</span><br />
        
        {/*JSON.stringify(comments)*/}
        
        {comments.map((onecomment, i) => {
                return (
                    <div className="comments" key={i}>
                        {/*JSON.stringify(onecomment)*/}
                        <div className="commentName">{onecomment.user_name} says</div>
                        <div className="commentContent">"{onecomment.comment}"</div>
                        <div className="commentTime">{onecomment.createdAt}</div>
                    </div>
                )})}
        
        
        </div>
        
    </div>
  )
}

export default ArtDetail