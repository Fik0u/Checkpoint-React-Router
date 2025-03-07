import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { movieData } from '../movieData'
import { Button } from 'react-bootstrap'
import { Card } from 'antd'

const Description = () => {
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
    <div className='container' style={{marginTop:'15%', textAlign: 'center'}}>
      {/* <h1> {movie.title} </h1> */}
      <Card
          title= {movie.title}
          variant="borderless"
          style={{width: 600, margin: 'auto', textAlign: 'center', fontWeight: 400, fontSize: '1rem', backgroundColor: '#ebdec6db'}}>
          {/* <img src={movie.posterUrl} alt={movie.title} style={{width: 400, height: 500, marginBottom:'30px'}}/> */}
        <p>{movie.description}</p>
      </Card>
      <Button onClick={() => navigate('/')} style={{marginTop:'70px', backgroundColor:'#b7a27e', border: 'none'}}>Go Back</Button>
    </div>
    </>
  )
}

export default Description
