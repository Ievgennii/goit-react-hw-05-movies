import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { Title } from './Home.styled';
import { getTrending } from '../../Api/apiService';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  // const location = useLocation();
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
      {/* <MovieList>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={120}
          // height={380}
          loading="lazy"
          alt="poster"
        />
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        
      </MovieList> */}
      {isLoading && <Loader />}
    </main>
  );
};
export default Home;
