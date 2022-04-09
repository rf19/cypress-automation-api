describe('api-test', function () {
    it('Test POST Request', function(){
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/store/order',
            body: {
                "id": 1,
                "petId": 1,
                "quantity": 5,
                "shipDate": "2022-04-08T04:01:22.996+0000",
                "status": "placed",
                "complete": true
            },
            Headers:{
                "content-type": 'application/json'
            }
        }).then((response) => { 
            expect(response.body).to.deep.equal({
                "id": 1,
                "petId": 1,
                "quantity": 5,
                "shipDate": "2022-04-08T04:01:22.996+0000",
                "status": "placed",
                "complete": true
            })
        })
    })

    it('Test GET Request', function (){
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/store/order/1',
            Headers:{
                "content-type": 'application/json'
            }
        }).then(function(response){
            expect(response.body).to.deep.equal({
                "id": 1,
                "petId": 1,
                "quantity": 5,
                "shipDate": "2022-04-08T04:01:22.996+0000",
                "status": "placed",
                "complete": true
            })
        })
    })

    it('Test DELETE Request', function (){
        cy.request({
            method : 'DELETE',
            url : 'https://petstore.swagger.io/v2/store/order/1'
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})    