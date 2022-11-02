const { it } = require("mocha");

var key= "5c703829398fd07a2bf132d3b850412a"
var token="8dd7c7888d8d5eeace0c6d1fe60aeaa3ae33a73d32254aca095fa11338748da7"
var Authorization= "21e71e35baddc424386fe4fdcd5ebfcdbd620ad29fdff41b36a54aeeeb032496"           

describe('Primeira API', function (){
    cy.on('uncaught:exception', err => {
        return false;
    });

    it('Primeira chamada API ', () => {
      
        cy.request({
            method: 'GET',
            url:`https://api.trello.com/members/me/boards?key=${key}&token=${token}`,
            headers: {
                accept: 'application/json',
              },
              failOnStatusCode: false,
            })
            .then(response => {
                console.log(
                  `Response: ${response.status} ${response.statusText}`
                );
    })
})
})
