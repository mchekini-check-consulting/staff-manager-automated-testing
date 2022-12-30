describe("ce test doit tester les differents Endpoints de notre application", () => {


    it("Test de la création d'une pépite", () => {

        let pepite = {
            "id": 15000,
            "sender": "az.sofiane@hotmail.fr",
            "price": 370000,
            "description": "une pepite a argenteuil",
            "url": "http://pepito.com"
        }



        cy.request("POST", "http://localhost:8080/api/v1/create-pepite", pepite).then(response => {

            cy.request("GET", "http://localhost:8080/api/v1/get-all-pepites").then(getResponse => {


                let results = getResponse.body.filter(pepite => pepite.id == 15000);

                expect(results.length).to.equals(1);
                expect(results[0].id).to.equals(15000);
                expect(results[0].sender).to.equals("az.sofiane@hotmail.fr");
                expect(results[0].price).to.equals(370000);
                expect(results[0].description).to.equals("une pepite a argenteuil");
                expect(results[0].url).to.equals("http://pepito.com");


                cy.request("DELETE", "http://localhost:8080/api/v1/delete-pepite/15000")

            })

        })


    })


})