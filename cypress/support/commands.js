Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Izabella')
    cy.get('#lastName').type('Córdova')
    cy.get('#email').type('izabellacordova@gmail.com')
    cy.get('#open-text-area').type('Mensagem teste')
    cy.contains('button', 'Enviar').click()
})