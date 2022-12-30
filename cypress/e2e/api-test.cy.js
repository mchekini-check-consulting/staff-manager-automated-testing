describe("it should test crud operations on pepite family", () => {

    it("it should test creation", () => {

        let pepite = {
            "id": 17000,
            "description": "description 1",
            "price": 10000,
            "url": "url-1",
            "sender": "me.chekini@gmail.com"
        }

        cy.request("POST", "http://localhost:8080/api/v1/create-pepite", pepite).then(response => {

            cy.request("GET", "http://localhost:8080/api/v1/get-all-pepites").then(getResponse => {

                let result = getResponse.body.filter(element => element.id == 17000);
                expect(result.length).to.equals(1);
                expect(result[0].id).to.equals(17000);
                expect(result[0].price).to.equals(10000);
                expect(result[0].description).to.equals("description 1");
                expect(result[0].url).to.equals("url-1");
                expect(result[0].sender).to.equals("me.chekini@gmail.com");

                cy.request("DELETE", "http://localhost:8080/api/v1/delete-pepite/17000");
            });

        });

    })

    it("it should test update", () => {

        let pepite = {
            "id": 17000,
            "description": "description 1",
            "price": 10000,
            "url": "url-1",
            "sender": "me.chekini@gmail.com"
        }

        let updatedPepite = {
            "id": 17000,
            "description": "description updated",
            "price": 12000,
            "url": "url-updated",
            "sender": "me.chekini@gmail.com updated"
        }

        cy.request("POST", "http://localhost:8080/api/v1/create-pepite", pepite).then(resp => {
            cy.request("PUT", "http://localhost:8080/api/v1/update-pepite", updatedPepite).then(updateResponse => {
                cy.request("GET", "http://localhost:8080/api/v1/get-all-pepites").then(getResponse => {

                    let result = getResponse.body.filter(element => element.id == 17000);
                    expect(result.length).to.equals(1);
                    expect(result[0].id).to.equals(17000);
                    expect(result[0].price).to.equals(12000);
                    expect(result[0].description).to.equals("description updated");
                    expect(result[0].url).to.equals("url-updated");
                    expect(result[0].sender).to.equals("me.chekini@gmail.com updated");

                    cy.request("DELETE", "http://localhost:8080/api/v1/delete-pepite/17000");
                });

            });

        });





    })


    it("it should test delete pepites", () => {
        let pepite = {
            "id": 17000,
            "description": "description 1",
            "price": 10000,
            "url": "url-1",
            "sender": "me.chekini@gmail.com"
        }

        cy.request("POST", "http://localhost:8080/api/v1/create-pepite", pepite).then(response => {
                cy.request("DELETE", "http://localhost:8080/api/v1/delete-pepite/17000").then(deleteResponse => {
                    cy.request("GET", "http://localhost:8080/api/v1/get-all-pepites").then(getResponse => {

                        let result = getResponse.body.filter(element => element.id == 17000);
                        expect(result.length).to.equals(0);

                    });

                });

            });

        });


})