describe("it should visit the API Gouv Site and test it", () => {


   it("test numéro 1", () => {

       cy.visit("https://api.gouv.fr/");
       cy.get("#homepage-mission-statement > .fr-btn").click();
       cy.get("[href=\"/les-api/api-recherche-entreprises\"] > .content > .header").click();
       cy.get(':nth-child(1) > .layout-right > .fr-btn > .content-wrapper').click();
       cy.get('#operations-Recherche_textuelle-get_search > .opblock-summary > .opblock-summary-control > .opblock-summary-method').click();
       cy.get('.btn').click();
       cy.get('[data-param-name="q"] > .parameters-col_description > input').type("check consulting");
       cy.get('.execute-wrapper > .btn').click();

   })





})