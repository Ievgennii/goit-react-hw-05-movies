import { Loader } from 'components/Loader/Loader';
// import { MovieList } from 'Pages/Home/Home.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { searchMovies } from './../../Api/apiService';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from './../../components/SearchBar/SearchBar';

const Movies = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'There is no movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
      // console.log(moviesList)
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>There is no movies with this request. Please, try again</p>}
      <MovieList movies={moviesList} />
      {/* <MovieList>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieLink>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </MovieList> */}
      {isLoading && <Loader />}
    </main>
  );
};

export default Movies;
