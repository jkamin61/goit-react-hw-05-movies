import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '2d700e8ba323a7e3c0af25b2bd411244';

const PopularMovies = () => {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => {
        setPopularMovies(res.data.results);
      });
  }, []);
  const displayPopularMoviesAbouts = (movieId) => {
    navigate(`/movies/${movieId}`);
  };
  return (
    <div className={"homepage"}>
      <h4 className={"homepage__heading"}>Trending today:</h4>
      <ul className={"homepage__list"}>
        {popularMovies.map(movie => {
          return (
            <li key={movie.id} className={"homepage__item"} onClick={() => displayPopularMoviesAbouts(movie.id)}>
              {movie.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PopularMovies;
