describe('Global Layout & Responsiveness', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a visible and consistent header across pages', () => {
    cy.get('.app__header').should('be.visible');
    cy.get('.page-title').should('contain', 'CHSRC Construct');

    cy.visit('/sobre');
    cy.get('.app__header').should('be.visible');
  });

  it('should be responsive on mobile devices', () => {
    cy.viewport('iphone-xr');
    cy.get('.app__content').should('be.visible');
    cy.get('button').contains('Criar Usuário').should('be.visible');
  });

  it('should be responsive on tablets', () => {
    cy.viewport('ipad-2');
    cy.get('.app__content').should('be.visible');
  });
});
