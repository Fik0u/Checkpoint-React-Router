import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import './movieList.css'

const MovieList = ({movie, searchTitle, searchRate}) => {
  // console.log(movie)
  return (
    <div className='list'>
        {movie.filter((movie) => movie.title.toUpperCase().includes(searchTitle.toUpperCase()) && movie.rate >= searchRate)
        .map((movie) => (<MovieCard movie = {movie} key = {movie.id}/>))}
    </div>
  )
}

export default MovieList
