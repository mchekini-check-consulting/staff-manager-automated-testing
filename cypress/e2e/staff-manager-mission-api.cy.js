describe('it should test Mission Features', () => {


    const missionEndpoint = "http://check-consulting.net:8080/api/v1/mission";

    it("Ajout d'une mission avec tous les champs obligatoires avec les bonnes valeurs", () => {

        const now = new Date();

        let missionName = "mission-test" + now.toISOString();

        let mission = {
            nameMission: missionName,
            startingDateMission: "02/02/1076",
            endingDateMission: "30/11/7172",
            collaboratorId: 1,
            customerId: 1,
            customerContactLastname: "client-lastName",
            customerContactFirstname: "client-firstName",
            customerContactEmail: "client@gmail.com",
            customerContactPhone: "9364056507",
            missionDescription: "description"
        }

        cy.request("POST", missionEndpoint, mission).then(response => {

            expect(response.status).to.equals(201)
        })
    })


    it("Ajout d'une mission avec des champs obigatoires manquants", () => {

        const now = new Date();

        let missionName = "mission-test" + now.toISOString();

        let mission = {
            nameMission: missionName,
            startingDateMission: "",
            endingDateMission: "",
            collaboratorId: null,
            customerId: null,
            customerContactLastname: "client-lastName",
            customerContactFirstname: "client-firstName",
            customerContactEmail: "client@gmail.com",
            customerContactPhone: "9364056507",
            missionDescription: "description"
        }

        cy.request({
            method: 'POST',
            url: missionEndpoint,
            failOnStatusCode: false,
            body: mission
        }).then( resp => {
            expect(resp.status).to.equals(400)
        })

    })




})