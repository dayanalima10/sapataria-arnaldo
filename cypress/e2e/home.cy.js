describe('testes na home', () => {
  it('abre a pagina', () => {
    cy.visit('/index.html');
  })

  it('abre o diretorio', () => {
    cy.visit('')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('titulo página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get(':nth-child(1) > a').should('have.text', 'Home');
    cy.get('.subtitle-pag').click();
    cy.get('ul').click();
    /* ==== End Cypress Studio ==== */
  });
})