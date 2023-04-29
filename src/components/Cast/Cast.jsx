import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = '2d700e8ba323a7e3c0af25b2bd411244';
const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        setCredits(res.data);
      });
  }, [movieId]);
  return (
    <ul className={'cast-list'} hidden={true}>
      <button onClick={() => {
        document.querySelector('.cast-list').hidden = true;
        navigate(`/movies/${movieId}`);
      }}>Close cast</button>
      {credits.cast && credits.cast.map(cast => {
        return (
          <li key={cast.id}>
            <img src={cast.profile_path && `https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name}
                 width={'160px'} height={'220px'} />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        );
      })}
    </ul>
  )
}
export default Cast;
