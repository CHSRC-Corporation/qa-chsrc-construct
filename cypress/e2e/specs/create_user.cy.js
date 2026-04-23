describe('User Creation Page', () => {
  it('should load the create user page and display all fields', () => {
    cy.visit('/');
    cy.contains('Crie seu usuário').should('be.visible');
    cy.get('input[placeholder="Digite seu nome"]').should('be.visible');
    cy.get('input[placeholder="Digite seu email"]').should('be.visible');
    cy.get('input[placeholder="Digite sua senha"]').should('be.visible');
    cy.get('button').contains('Criar Usuário').should('be.visible');
  });
});
