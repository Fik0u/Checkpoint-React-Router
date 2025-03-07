import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { movieData } from '../movieData'
import { Button } from 'react-bootstrap'

const Trailer = () => {
  const params = useParams()
    // console.log(params)

    const [movie, setMovie] = useState({})
    // console.log(movie)

    useEffect(() => {
      setMovie(movieData.find(el => el.id === +params.id))
    }, [params.id])

    const navigate = useNavigate()
  return (
    <>
      <h1 style={{textAlign:'center', margin: '30px'}}> {movie.title} </h1>
    <div className='container' style={{margin: 'auto', marginTop:'40px', textAlign: 'center'}}>
      
        <div className="trailer"> <iframe src = {movie.trailer} title = {movie.title} style={{width:'800px', height:'400px', borderRadius: '5px'}} ></iframe></div>
      
        <Button onClick={() => navigate('/')} style={{marginTop:'50px'}}>Go Back</Button>
    </div>
    </>
  )
}

export default Trailer
