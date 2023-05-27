import styled from 'styled-components';

// export const CastList = styled.ul`
// display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 30px;
//   padding: 30px 0;
//   list-style: none;
// `;
// export const CastItem = styled.li`
//   margin: 10px 0 16px;
//   padding: 2px 8px;
//   //box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
// `;
// export const Name = styled.h3`
//   margin: 8px 0;
// `;
// export const Character = styled.p`
//   margin: 0;
// `;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 0 30px;
`;

export const CastItem = styled.li`
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const CastImg = styled.img`
width: 200px;
  min-height: 330px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const CastDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
