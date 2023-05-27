import styled from 'styled-components';

export const MovieItem = styled.li`
  width: 200px;
  border-radius: 10px;
  border-color: black;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  

  transition: transform  500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const MovieImg = styled.img`
width: 200px;
  min-height: 30px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  text-decoration: none;
`;