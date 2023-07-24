import 'cypress-keycloak';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('it should test Collaborator Features', () => {
    beforeEach(() => {
        cy.login({
            root: 'http://ci.check-consulting.net:10000',
            realm: 'staff-manager-admin',
            username: 'mchekini',
            password: 'test',
            client_id: 'staff-manager-admin-client',
            redirect_uri: 'http://check-consulting.net:81',
        });
        cy.visit("http://check-consulting.net:81");
    });

    it("Ajout d'un Collaborateur", () => {

        let collaborator = {
            firstName: "Mahdi",
            lastName: "CHEKINI",
            email: "me.chekini@gmail.com",
            phone: "0695562543",
            address: "16 rue de la voute 75012 Paris"
        }


        cy.viewport(1600, 800)
        cy.get('[href="/collaborateur"] > .MuiListItem-root > .MuiBox-root').click()
        cy.get('.MuiButton-root').click()
        cy.get('.MuiModal-root > .MuiBox-root').should("be.visible")
        cy.get('input#\\:r12\\:').type(collaborator.firstName)
        cy.get('input#\\:r13\\:').type(collaborator.lastName)
        cy.get('input#\\:r14\\:').type(collaborator.email)
        cy.get('input#\\:r15\\:').type(collaborator.phone)
        cy.get('input#\\:r16\\:').type(collaborator.address)
        cy.get('form > .MuiButtonBase-root').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should("be.visible")
        cy.get('.Toastify__toast-body > :nth-child(2)').contains("Le collaborateur a été créé avec succès")

    })

});