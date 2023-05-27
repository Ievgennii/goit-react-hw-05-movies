import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <List>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
};

export default MovieList