import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cast from 'components/Cast/Cast';
import axios from 'axios';
import Reviews from '../Reviews/Reviews';
import MovieHeader from '../MovieHeader/MovieHeader';

const API_KEY = '2d700e8ba323a7e3c0af25b2bd411244';

const MovieAbouts = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        setSelectedMovie(res.data);
      });
  }, [movieId]);
  const handleCastVisibility = () => {
    document.querySelector('.cast-list').hidden = false;
    document.querySelector('.reviews').hidden = true;
    navigate(`/movies/${movieId}/cast`);
  };
  const handleReviewsVisibility = () => {
    document.querySelector('.reviews').hidden = false;
    document.querySelector('.cast-list').hidden = true;
    navigate(`/movies/${movieId}/reviews`);
  };
  return selectedMovie && (
    <>
      <MovieHeader></MovieHeader>
      <div className={'movie-abouts'}>
        <div>
          <img src={selectedMovie.poster_path && `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
               alt={selectedMovie.title} className={"movie-abouts__image"} />
        </div>
        <div>
          <h2>{selectedMovie.title}</h2>
          <p>{`User Score: ${(selectedMovie.vote_average * 10).toFixed(2)}%`}</p>
          <h3>Overview</h3>
          <p>{selectedMovie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {selectedMovie.genres && selectedMovie.genres.map(genre => {
              return (
                <li key={genre.id}>{genre.name}</li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={'additionalInfo'}>
        <div>
          <p className={"movie-abouts__additional-info"}>Additional Information</p>
          <ul>
            <li onClick={handleCastVisibility}>Cast</li>
            <li onClick={handleReviewsVisibility}>Reviews</li>
          </ul>
        </div>
        <Cast></Cast>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default MovieAbouts;
