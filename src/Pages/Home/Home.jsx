import { useState, useEffect } from 'react';

import { Title } from './Home.styled';
import { getTrending } from '../../Api/apiService';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
      // console.log(trendMovies)
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList movies={trendMovies} />

      {isLoading && <Loader />}
    </main>
  );
};
export default Home;
