import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './movieCard.css'
import FilterRate from '../filterRate/FilterRate'
import { Link } from 'react-router-dom'

// MovieCard component that displays the movie card with the movie properties
const MovieCard = ({movie}) => {
  // console.log(movie)
  return (
    <div className='card'>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='poster' variant="top" src= {movie.posterUrl} />
      <Card.Body>
        <Card.Title className='title'>{movie.title}</Card.Title>
        <Card.Text>
          <FilterRate isRating = {false} rate = {movie.rate}/>
        </Card.Text>

        <div className="btn" style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>

        <Link to = {`/description/${movie.id}`}>
          <Button variant="primary">Details</Button>
        </Link>
        
        <Link to = {`/trailer/${movie.id}`}>
          <Button variant="primary">Trailer</Button>
        </Link>

        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
