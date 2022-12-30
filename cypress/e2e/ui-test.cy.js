describe('mon premier test', () => {
    it('Tester l\'api de recherche d\'entreprises', () => {


        let id = 1;
        cy.visit("https://www.licitor.com/");

        cy.get(".HistoryNav > .Active").click();
        cy.get(".Active > h3 > a").click();
        cy.get(".Active > ul > :nth-child(1) > a").click();
        cy.get(".AdResults").children().then(resp => {
            for (let i = 0; i < resp.length; i++) {
                let annonce = resp[i].innerText;
                let description = annonce.split("Mise à prix : ")[0];


                if (description !== undefined && description != null && description !== "") {
                    let price = annonce.split("Mise à prix : ")[1];
                    let convertedPrice = price?.split(" ");
                    let finalPriceString = "";
                    let finalPriceNumber;
                    for (let index = 0; index < convertedPrice.length - 1; index++) {
                        finalPriceString = finalPriceString + convertedPrice[index];
                    }
                    finalPriceNumber = parseInt(finalPriceString);

                    cy.url().then(url => {
                        cy.request('POST', 'http://localhost:8080/api/v1/create-pepite', {
                            "sender": "me.chekini@gmail.com",
                            "price": finalPriceNumber,
                            "description": description,
                            "url": url
                        }).then(
                            (response) => {
                            }
                        );
                        id++;

                    });
                }

            }


        })

    })
})