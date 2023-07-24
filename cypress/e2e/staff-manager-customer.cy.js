import 'cypress-keycloak';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


describe('it should test Customer Features', () => {
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

    it("Ajout d'un client avec tous les champs obligatoires et des valeurs correctes", () => {

        const now = new Date().toISOString();
        let customer = {
            name: "Total " + now,
            email: "contact" + now + "@total.com",
            phone:  "0695562543",
            address: "16 rue de la voute 75012 Paris",
            tva: "FR01234567891"
        }


        cy.viewport(1600, 800)
        cy.get('[href="/clients"] > .MuiListItem-root > .MuiBox-root').click()
        cy.get('.css-qfdd9t > .MuiButtonBase-root').click()
        cy.get('input#\\:r3\\:').type(customer.email)
        cy.get('input#\\:r4\\:').type(customer.name)
        cy.get('input#\\:r5\\:').type(customer.address)
        cy.get('input#\\:r6\\:').type(customer.phone)
        cy.get('input#\\:r7\\:').type(customer.tva)
        cy.get('.MuiButton-textPrimary').click()
        cy.get('.MuiButton-textPrimary').should("be.enabled")

    })

    it("Ajout d'un client avec un numéro de TVA incorrect", () => {

        let customer = {
            name: "Total",
            email: "contact@total.com",
            phone: "0695562543",
            address: "16 rue de la voute 75012 Paris",
            tva: "FR0123456789"
        }


        cy.viewport(1600, 800)
        cy.get('[href="/clients"] > .MuiListItem-root > .MuiBox-root').click()
        cy.get('.css-qfdd9t > .MuiButtonBase-root').click()
        cy.get('input#\\:r3\\:').type(customer.email)
        cy.get('input#\\:r4\\:').type(customer.name)
        cy.get('input#\\:r5\\:').type(customer.address)
        cy.get('input#\\:r6\\:').type(customer.phone)
        cy.get('input#\\:r7\\:').type(customer.tva)
        cy.get('.MuiButton-textPrimary').click()
        cy.get('p#\\:r7\\:-helper-text').contains("Numéro TVA non valide")
        cy.get('.MuiButton-textPrimary').should("be.enabled")

    })


    it("Ajout d'un client avec un numéro de téléphone incorrect", () => {

        let customer = {
            name: "Total",
            email: "contact@total.com",
            phone: "06955625",
            address: "16 rue de la voute 75012 Paris",
            tva: "FR0123456789"
        }


        cy.viewport(1600, 800)
        cy.get('[href="/clients"] > .MuiListItem-root > .MuiBox-root').click()
        cy.get('.css-qfdd9t > .MuiButtonBase-root').click()
        cy.get('input#\\:r3\\:').type(customer.email)
        cy.get('input#\\:r4\\:').type(customer.name)
        cy.get('input#\\:r5\\:').type(customer.address)
        cy.get('input#\\:r6\\:').type(customer.phone)
        cy.get('input#\\:r7\\:').type(customer.tva)
        cy.get('.MuiButton-textPrimary').click()
        cy.get('p#\\:r6\\:-helper-text').contains("Le numéro de téléphone doit contenir 10 chiffres")
        cy.get('.MuiButton-textPrimary').should("be.enabled")

    })


    it("Bouton grisé lorsque tous les champs ne sont pas remplis", () => {

        let customer = {
            name: "Total",
            email: "contact@total.com",
            phone: "06955625",
            address: "16 rue de la voute 75012 Paris",
            tva: ""
        }


        cy.viewport(1600, 800)
        cy.get('[href="/clients"] > .MuiListItem-root > .MuiBox-root').click()
        cy.get('.css-qfdd9t > .MuiButtonBase-root').click()
        cy.get('input#\\:r3\\:').type(customer.email)
        cy.get('input#\\:r4\\:').type(customer.name)
        cy.get('input#\\:r5\\:').type(customer.address)
        cy.get('input#\\:r6\\:').type(customer.phone)
        cy.get('.MuiButton-textPrimary').should("be.disabled")

    })

});