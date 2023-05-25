import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SheredLayout.styled';
import { BiCameraMovie, BiHomeAlt } from 'react-icons/bi';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            <BiHomeAlt size={20} />
            Home
          </Link>
          <Link to="/movies">
            <BiCameraMovie size={20} />
            Movies
          </Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
