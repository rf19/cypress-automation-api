describe('api-test', function () {
    it('Test POST Request', function(){
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: {
                "id": 1,
                "username": "lorem",
                "firstName": "ipsum",
                "lastName": "string",
                "email": "a@gmail.com",
                "password": "loremipsum",
                "phone": "0000000",
                "userStatus": 1
            },
            Headers:{
                "content-type": 'application/json'
            }
        }).then((response) => { 
            expect(response.body).to.deep.equal({
                "code": 200,
                "type": "unknown",
                "message": "1"
            })
        })
    })

    it('Test GET Request', function (){
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/user/lorem',
            Headers:{
                "content-type": 'application/json'
            }
        }).then(function(response){
            expect(response.body).to.deep.equal({
                "id": 1,
                "username": "lorem",
                "firstName": "ipsum",
                "lastName": "string",
                "email": "a@gmail.com",
                "password": "loremipsum",
                "phone": "0000000",
                "userStatus": 1
            })
        })
    })

    it('Test PUT Request', function (){
        cy.request({
            method : 'PUT',
            url : 'https://petstore.swagger.io/v2/user/lorem',
            body: {
                "id": 1,
                "username": "lorem",
                "firstName": "ipsum",
                "lastName": "string",
                "email": "a@gmail.com",
                "password": "loremipsum",
                "phone": "0000000",
                "userStatus": 0
            },
            Headers:{
                "content-type": 'application/json',
                "access-control-allow-methods": "GET, POST, DELETE, PUT",
            }
        }).then(function(response){
            expect(response.body).to.deep.equal({
                "code": 200,
                "type": "unknown",
                "message": "1"
            })
        })
    })

    it('Test DELETE Request', function (){
        cy.request({
            method : 'DELETE',
            url : 'https://petstore.swagger.io/v2/user/lorem'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})    