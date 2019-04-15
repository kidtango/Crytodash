import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

export default function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
