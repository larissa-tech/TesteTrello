describe('Testando api',() => {

    it('POST - create card', () => {

    const add = { 
    "key"   :   "763285633265aadd23f47c6e3c60d7a2",
    "token" :   "9ee856a66ee16cd83cefc58b3151902e917d25ce7096d040e56b594143000a18",
    "name"  :   "nttdata",
    "desc"  :   "LarissaTESTE",
    "idList":   "635fd7782470cb01a38170cf"
    }

    cy.request('POST','https://api.trello.com/1/cards',add)
    })
    })