import MovieHeader from 'components/MovieHeader/MovieHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = '2d700e8ba323a7e3c0af25b2bd411244';

const Movies = () => {
  const navigate = useNavigate();
  const [movieQuery, setMovieQuery] = useState();
  const [inputValue, setInputValue] = useState();
  const [queryOutcome, setQueryOutcome] = useState([]);

  const handleGettingValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleSearchValue = (e) => {
    e.preventDefault();
    setMovieQuery(inputValue);
  };
  useEffect(() => {
    movieQuery && axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`)
      .then(res => {
        setQueryOutcome(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieQuery]);
  const displayMovieAbouts = (movieId) => {
    navigate(`/movies/${movieId}`);
  };
  return (
    <div className={'Movies'}>
      <MovieHeader></MovieHeader>
      <form onSubmit={handleSearchValue}>
        <input className={'movie-search'} type={'text'} onChange={handleGettingValue} onSubmit={(e) => {
          e.preventDefault();
        }}></input>
        <button type={'submit'}>Search</button>
      </form>
      <ul className={'movie-search__list'}>
        {queryOutcome && queryOutcome.map((movie) => (
          <li key={movie.id} className={'movie-search__item'}
              onClick={() => displayMovieAbouts(movie.id)}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
