import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';


const App = () => {
  {/* add state to obj to hold movie results when we search */}
  const [movies, setMovies] = useState([]);
  {/* add input, store in in state so it can be called every time the search input changes for the API */}

  {/* add state to variable to save the favourites*/}
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');



      {/* Ad call to API to display more movies */}

      const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=85ae2750`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
          setMovies(responseJson.Search);
          {/* display movies from API search */}
        }
      };

{/* getMovieRequest will fire off only when page is loading */}
      useEffect(() => {
        getMovieRequest(searchValue);
      }, [searchValue]);

      const AddFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
      };


  return (
  <div className='container-fluid movie-app'>
  <div className='row d-flex align-items-center mt-4 mb-4'>
    <MovieListHeading heading='Movies'/>
    {/* store SearchValuevalue in SearhBox state in order to make searchbar actually work */}
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row'>
    <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent={AddFavourites}/>
  {/* Call MovieList component & display it */}
    </div>
  </div>
  );
};

export default App;
