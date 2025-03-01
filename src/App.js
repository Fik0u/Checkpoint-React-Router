import './App.css';
import { useState } from 'react';
import MovieList from './components/movieList/MovieList';
import { movieData } from './movieData';
import AddMovie from './components/addMovie/AddMovie';
import FilterTitle from './components/filterTitle/FilterTitle';
import FilterRate from './components/filterRate/FilterRate';


function App() {
// declaring our states
  const [movie, setMovie] = useState(movieData);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRate, setSearchRate] = useState(1);


  // console.log(movie)
  const movieAdd = (newMovie) => {
    setMovie([...movie, newMovie])
}
  return (
    <div className="App">
      <h1>Moovy</h1>            
{/* Calling the components */}
      <FilterTitle searchTitle = {searchTitle} setSearchTitle = {setSearchTitle}/> 
      <FilterRate searchRate = {searchRate} setSearchRate = {setSearchRate} isRating = {true} />
      <AddMovie movieAdd = {movieAdd}/>
      <MovieList movie = {movie} searchTitle = {searchTitle} searchRate = {searchRate}/>
    </div>
  );
}

export default App;
