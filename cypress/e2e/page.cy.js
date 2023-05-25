describe('Navigation', () => {
  it('Should render Home Page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[alt="Logo da Squid"]')
      .should('have.attr', 'src')
      .should('include', '/_next/static/media/logo.00dcc9b5.svg');
    cy.get('.img__hover').first().invoke('removeAttr', 'target').click();
  });
});
