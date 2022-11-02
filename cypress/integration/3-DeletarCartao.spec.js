describe('Testando api',() => {

    it('DELETE cartao', () => {

    const item = { 
    "key"   :   "763285633265aadd23f47c6e3c60d7a2",
    "token" :   "9ee856a66ee16cd83cefc58b3151902e917d25ce7096d040e56b594143000a18",
    "id": "635fd7782470cb01a38170cf"
    }

    cy.request('DELETE','https://api.trello.com/1/cards/635fd7782470cb01a38170cf',item)
  
    })
})
