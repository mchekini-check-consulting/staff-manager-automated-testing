describe ("BNPwebSite", () => {


    it("visit BNP web site by mobile", () => {
        cy.viewport('iphone-8');
        cy.visit("https://mabanque.bnpparibas")
    })



    it("search BNP web site by mobile", () => {
        cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler').click()
        cy.get('#open-recherche-nonconnecte-mobile > .cpm-header_icon').click()
        cy.get('#recherche-site > .join-input3 > .form-control').click()
        cy.get('#recherche-site > .join-input3 > .form-control').type('commande livret A')
        cy.get('#recherche-site > .join-unit > .form-control').click()
        cy.scrollTo('Divers')

    })

})