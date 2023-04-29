import Home from '../pages/Home';
import Movies from '../pages/Movies';
import { Route, Routes } from 'react-router-dom';
import MovieAbouts from './MovieAbouts/MovieAbouts';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:movieId' element={<MovieAbouts />} />
      <Route path='/movies/:movieId/cast' element={<MovieAbouts />} />
      <Route path='/movies/:movieId/reviews' element={<MovieAbouts />} />
    </Routes>
  );
};
