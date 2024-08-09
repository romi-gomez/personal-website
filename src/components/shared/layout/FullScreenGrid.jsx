import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 95vh;
  grid-template-columns: ${(props) => `repeat(${props.$columns}, 1fr)`};
  grid-template-rows: ${(props) => props.rows};
`;

const GridItem = styled.div`
  display: flex;
  align-items: ${props => props.$verticalalign || 'top' };
  justify-content: center;
`;

const FullScreenGrid = ({ columns = 1, rows = '1fr', children, verticalalign = 'top' }) => {
  return (
    <GridContainer $columns={columns} rows={rows}>
      {React.Children.map(children, (child, index) => (
        <GridItem $verticalalign={verticalalign} key={index}>{child}</GridItem>
      ))}
    </GridContainer>
  );
};

export default FullScreenGrid;