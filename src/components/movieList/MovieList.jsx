import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import './movieList.css'

// MovieList component that displays the list of movies
const MovieList = ({movie, searchTitle, searchRate}) => {
  // console.log(movie)
  return (
    <div className='list'> 
    {/* Using filter() to find the movie and map() to create a card to each movie */}
        {movie.filter((movie) => movie.title.toUpperCase().includes(searchTitle.toUpperCase()) && movie.rate >= searchRate)
        .map((movie) => (<MovieCard movie = {movie} key = {movie.id}/>))}
    </div>
  )
}

export default MovieList
