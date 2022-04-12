import React, { useEffect, useState } from 'react'
import ArtItem from './ArtItem';
// import Spinner from './Spinner';
import axios from 'axios';

const Arts = () => {
	
	const [arts,setArts] = useState([]);
	const [update,setUpdate] = useState(false);
	useEffect(() => {
		axios.get(`https://shielded-wave-13203.herokuapp.com/api/arts`)
      .then(res => {
        //console.log(res.data)
		setArts(res.data)
		setUpdate(true)
		console.log(arts)
      })
		
	  },[update]);
	
	//let arts = [1,2,3]
	
	
    // const [loading, setLoading] = useState(false)
    // const [arts, setarts] = useState([1, 2, 3, 4, 5, 6])

    

    return (
        <div className="row my-4">
            <h2 className="text-center my-5">Arts</h2>
            {/* {loading && <Spinner />} */}
            <div className="container text-center">
                {arts.length === 0 && 'No Arts to display!'}
            </div>
            {arts.map((art, i) => {
                return (
                    <div className="col-md-3 my-5" key={i}>
						<ArtItem art={art} i={i} />
                    </div>
                )
            })}
        </div>
    )
}

export default Arts