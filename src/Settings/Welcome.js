import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function Welcome({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to CrytoDash, please select your favorite coins to being.
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
