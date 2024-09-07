/// <reference types="Cypress" />
const url = 'https://rahulshettyacademy.com/seleniumPractise/#/';

describe('GreenKart TestSuite', function() {
    it('Navigate to GreenKartUrl', () => {
        cy.visit(url);
        cy.get('.search-keyword')
        .type('ca');
        cy.wait(2000);
        //In Cypress get acts as findElement of Selenium
        
        //cy.get('.products:visible').should('have.length', 4);
        cy.get('div.products').find('.product').should('have.length', 4);
      
    })
})