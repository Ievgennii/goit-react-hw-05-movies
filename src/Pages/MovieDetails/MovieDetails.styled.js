import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  margin: 0;
`;
export const MovieBox = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`;
export const MovieInfo = styled.div`
  padding: 20px 40px;
`;
export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;
export const Button = styled.button`
  margin-top: 16px;
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  &:hover {
    background-color: blue;
    color: white;
  }
  &.active {
    background-color: blue;
    color: white;
  }
`;

export const LinkBack = styled(Link)`
  
display: flex;
  align-items: center;
  gap: 5px;
  width: 100px;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  
  color: black;
  font-weight: 500;

  &:hover,
&:focus {
  background-color: blue;
  color: white;
}

  &.active {
    color: white;
    background-color: blue;
  }
  
`;
export const InfoBox = styled.div`
  padding: 20px;
  border-bottom: solid 1px grey;
`;

export const LinkReview = styled(Link)`
grid-area: cast;
justify-self: start;
padding: 6px 25px;
color: black;
font-size: 16px;
font-weight: 500;
border-radius: 4px;
border: none;

margin-right: 10px;

transition: color rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
  rgba(0, 0, 0, 0.3) 0px 30px 60px 30px,
  rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

&:hover,
&:focus {
  background-color: blue;
  color: white;
}

&.active {
  background-color: blue;
  color: white;
}
`;

export const LinkCast = styled(Link)`
  grid-area: cast;
  justify-self: start;
  padding: 6px 25px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  b
  margin-right: 10px;

  transition: color rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px 30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }

  &.active {
    background-color: blue;
    color: white;
  }
`;
