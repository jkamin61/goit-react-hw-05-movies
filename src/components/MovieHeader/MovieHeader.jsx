import { useNavigate } from 'react-router-dom';

const MovieHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={"movie-header"}>
      <p className={"movie-header__home"} onClick={() => {
        navigate('/goit-react-hw-05-movies');
      }}>Home</p>
      <p className={"movie-header__movies"} onClick={() => {
        navigate('/movies')
      }}>Movies</p>
    </div>
  )
}
export default MovieHeader;
