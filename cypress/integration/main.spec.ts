/// <reference types="cypress"/>

describe('_home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('_main', () => {
    it('_modes', () => {
      cy.get('div[data-testid="cell"]').should('have.length', 9 * 9);
      cy.get('button[data-testid="mode-medium"]').click();
      cy.get('div[data-testid="cell"]').should('have.length', 16 * 16);

      cy.get('button[data-testid="mode-hard"]').click();
      cy.get('div[data-testid="cell"]').should('have.length', 16 * 30);

      cy.get('button[data-testid="mode-easy"]').click();
      cy.get('div[data-testid="cell"]').should('have.length', 9 * 9);
    });
  });
});
