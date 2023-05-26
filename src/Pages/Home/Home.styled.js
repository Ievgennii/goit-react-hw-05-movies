import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
export const MovieList = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 12px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

`;

export const Title = styled.h2`
  
  padding-top: 30px;
  
  text-align: center;
`;
