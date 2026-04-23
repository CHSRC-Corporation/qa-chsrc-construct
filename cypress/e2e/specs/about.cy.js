describe('About Page', () => {
  it('should navigate to the about page and display content', () => {
    cy.visit('/sobre');
    cy.contains('Sobre').should('be.visible');
    cy.contains('Exemplo simples de segunda rota com React Router.').should('be.visible');
  });
});
