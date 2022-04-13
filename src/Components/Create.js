import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ArtItem from './ArtItem';
import { useEffect, useState } from 'react'
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";



const Create = () => {
    
    const [imgurl,setImgurl] = useState("")
    const { user, isAuthenticated, isLoading } = useAuth0();
    const nickname = user.nickname
    
    function onchangehandler(e){
        setImgurl(e.target.value)
        console.log(imgurl)
    }
    function onSubmitHandler(e){
        axios.post(`https://shielded-wave-13203.herokuapp.com/api/arts`,{user_name:nickname,img:imgurl})
      .then(res => {
		console.log(res)
        setImgurl("")
      })
    }
    function onChangeRecap(){
		
	}
	
    return(
    <div>
        <div className="createhead">Upload Your Art
        
         <div className="uploadbox"><input value={imgurl} onChange={(e)=>onchangehandler(e)} placeholder="Enter your Image Link" /></div>
         <ReCAPTCHA
			sitekey="6Lccmm0fAAAAAPVxC1MtAn6Mqk-V21CPLUs2MMCO"
			onChange={onChangeRecap}
		  />
		 <button onClick={(e)=>onSubmitHandler(e)}>Submit</button>
        </div>
       
    </div>
    )
    
}

export default Create