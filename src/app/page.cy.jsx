import React from 'react';
import Page from './page';

describe('<Page />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Page />);

    cy.get('img').should('have.attr', 'src', '../../public/assets/logo.svg');
  });
});
