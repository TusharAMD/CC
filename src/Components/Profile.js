import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ArtItem from './ArtItem';
import { useEffect, useState } from 'react'
import axios from 'axios';

const Profile = () => {
    
    const [arts,setArts] = useState([]);
	const [update,setUpdate] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();
    const nickname = user.nickname
    console.log(user)
	useEffect(() => {
        if(!isLoading){
		axios.get(`https://shielded-wave-13203.herokuapp.com/api/arts/user/${nickname}`)
      .then(res => {
        //console.log(res.data)
		setArts(res.data)
		setUpdate(true)
		console.log(arts)
        })}
		
	  },[update]);
    
    console.log(isLoading)
    if (!isLoading){
    return (
        <div>
            <br />
            <img src={user.picture} alt="" style={{ borderRadius: "100%" }} />
            <p>{user.nickname}</p>
            <p>{user.email}</p>
            <h3>Your Arts</h3>
            <div className="row my-4">
                {
                    arts.map((art, i) => {
                        return (

                            <div className="col-md-3 my-5" key={i}>
                                <ArtItem art={art} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
}

export default Profile