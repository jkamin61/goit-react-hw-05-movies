import axios from 'axios';
import { Parser } from "html-to-react";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API_KEY = '2d700e8ba323a7e3c0af25b2bd411244';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const htmlParser = new Parser();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        setReviews(res.data);
      });
  }, [movieId]);
  return (
    <ul className={'reviews'} hidden={true}>
      <button onClick={() => {
        document.querySelector('.reviews').hidden = true;
        navigate(`/movies/${movieId}`);
      }}>Close reviews
      </button>
      { reviews.results && reviews.results.map(rev => {
        return (
          <li key={rev.id}>
            {htmlParser.parse(rev.author)}
            {htmlParser.parse(rev.content)}
          </li>
        );
      })
      }
    </ul>
  );
};

export default Reviews;
