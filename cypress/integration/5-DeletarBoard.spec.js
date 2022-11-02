describe('Testando api',() => {

    it('DELETE board', () => {

    const item = { 
    "key"   :   "763285633265aadd23f47c6e3c60d7a2",
    "token" :   "9ee856a66ee16cd83cefc58b3151902e917d25ce7096d040e56b594143000a18"
    }

    cy.request('DELETE','https://api.trello.com/1/boards/2kjBXmHf', item)
    
    })
})