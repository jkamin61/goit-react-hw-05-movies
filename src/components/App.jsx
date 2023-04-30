import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieAbouts = lazy(() => import('./MovieAbouts/MovieAbouts'));

export const App = () => {
  return (
    <Routes>
      <Route path='/goit-react-hw-05-movies' element={
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      } />
      <Route path='/movies' element={
        <Suspense fallback={<div>Loading...</div>}>
          <Movies />
        </Suspense>
      } />
      <Route path='/movies/:movieId' element={
        <Suspense fallback={<div>Loading...</div>}>
          <MovieAbouts />
        </Suspense>
      } />
      <Route path='/movies/:movieId/cast' element={
        <Suspense fallback={<div>Loading...</div>}>
          <MovieAbouts />
        </Suspense>
      } />
      <Route path='/movies/:movieId/reviews' element={
        <Suspense fallback={<div>Loading...</div>}>
          <MovieAbouts />
        </Suspense>
      } />
    </Routes>
  );
};
