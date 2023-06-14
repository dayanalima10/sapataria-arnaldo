describe('teste da navbar', function() {

    beforeEach (function() {
        cy.visit('/index.html');   
    });

  it('Deve ter classe .navegation-menu', function (){

        cy.get('nav').should('have.class','navegation-menu');

  });
  it('Deve ter um atributo href válido para cada página', function(){

    cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
    cy.get('[data-test=sobre-nos]').should('have.attr', 'href', './sobrenos.html');
    cy.get('[data-test=catalogo]').should('have.attr', 'href', './catalogo.html');
    cy.get('[data-test=contato]').should('have.attr', 'href', './contato.html');


  });
});
