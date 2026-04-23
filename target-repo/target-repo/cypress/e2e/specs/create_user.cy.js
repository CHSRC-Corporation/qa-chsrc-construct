describe('User Creation Page - Functional & Validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the page and display all fields', () => {
    cy.contains('Crie seu usuário').should('be.visible');
    cy.get('input[placeholder="Digite seu nome"]').should('be.visible');
    cy.get('input[placeholder="Digite seu email"]').should('be.visible');
    cy.get('input[placeholder="Digite sua senha"]').should('be.visible');
    cy.get('button').contains('Criar Usuário').should('be.visible');
  });

  it('should handle invalid email formats', () => {
    cy.get('input[placeholder="Digite seu email"]').type('invalid-email');
    // Assuming the component adds an error class or message
    cy.get('input[placeholder="Digite seu email"]').should('have.class', 'error').or('contain', 'email inválido');
  });

  it('should require all fields to be filled before submission', () => {
    cy.get('button').contains('Criar Usuário').click();
    // Verify that the app doesn't navigate away or shows validation errors
    cy.url().should('include', '/');
    cy.contains('Por favor, preencha os campos').should('be.visible');
  });

  it('should allow filling the form correctly', () => {
    cy.get('input[placeholder="Digite seu nome"]').type('Test User');
    cy.get('input[placeholder="Digite seu email"]').type('test@example.com');
    cy.get('input[placeholder="Digite sua senha"]').type('Password123!');
    cy.get('button').contains('Criar Usuário').should('not.be.disabled');
  });
});
