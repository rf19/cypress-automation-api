describe('api-test', function () {
    it('Test POST Request', function(){
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 1,
                "category": {
                    "id": 1,
                    "name": "colorado"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                    "id": 1,
                    "name": "anjing"
                    }
                ],
                "status": "available"
            },
            Headers:{
                "content-type": 'application/json'
            }
        }).then((response) => { 
            expect(response.body).to.deep.equal({
                "id": 1,
                "category": {
                    "id": 1,
                    "name": "colorado"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                    "id": 1,
                    "name": "anjing"
                    }
                ],
                "status": "available"
            })
        })
    })

    it('Test GET Request', function (){
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/pet/1',
            Headers:{
                "content-type": 'application/json'
            }
        }).then(function(response){
            expect(response.body).to.deep.equal({
                "id": 1,
                "category": {
                    "id": 1,
                    "name": "colorado"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                    "id": 1,
                    "name": "anjing"
                    }
                ],
                "status": "available"
            })
        })
    })

    it('Test PUT Request', function (){
        cy.request({
            method : 'PUT',
            url : 'https://petstore.swagger.io/v2/pet',
            body: {
                "name": "new doggie"
            },
            Headers:{
                "content-type": 'application/json',
                "access-control-allow-methods": "GET, POST, DELETE, PUT",
            }
        }).then(function(response){
            expect(response.body).have.property("name","new doggie")
        })
    })

    it('Test DELETE Request', function (){
        cy.request({
            method : 'DELETE',
            url : 'https://petstore.swagger.io/v2/pet/1'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})    