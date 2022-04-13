import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Components/1.jpg'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const ArtItem = (art,i) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    function onlikehandler(e){
        //console.log(art.art._id)
        console.log(user.nickname)
        axios.put(`https://shielded-wave-13203.herokuapp.com/api/arts/${art.art._id}/like`,{"user_name":user.nickname})
      .then(res => {
        console.log(res)
      })
    }
    
    
    return (
        <div className="container">
		{/*JSON.stringify(art)*/}
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={art.art.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">By {art.art.user_name}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{art.art.createdAt}
                    </span></h5>
                    <br />
                    {/* <p className="card-text"><small className="text-muted">Updated On {new Date().toLocaleString()}</small></p> */}
                    <Link role='button' to={`/art/${art.art._id}`} className="btn btn-sm btn-dark ">View</Link>
                    <span className="mx-5">
                        <i onClick={(e)=>onlikehandler(e)} className="far fa-solid fa-thumbs-up " style={{ cursor: "pointer" }} ></i><br />
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <p>{art.art.likes.length} likes</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArtItem