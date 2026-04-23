describe('About Page - Content & Accessibility', () => {
  beforeEach(() => {
    cy.visit('/sobre');
  });

  it('should display the correct title and description', () => {
    cy.get('h2').should('contain', 'Sobre');
    cy.get('p').should('contain', 'Exemplo simples de segunda rota com React Router.');
  });

  it('should be accessible from the home page (indirectly via URL)', () => {
    cy.visit('/');
    cy.visit('/sobre');
    cy.url().should('include', '/sobre');
    cy.contains('Sobre').should('be.visible');
  });
});
