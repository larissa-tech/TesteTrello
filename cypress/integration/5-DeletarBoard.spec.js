describe('Testando api',() => {

    it('DELETE board', () => {

    const add = { 
    "key"   :   "763285633265aadd23f47c6e3c60d7a2",
    "token" :   "9ee856a66ee16cd83cefc58b3151902e917d25ce7096d040e56b594143000a18",
}

//ids válidos para teste de exclusão (ruMC4GMy, 8JzMDptF,vqNYI4Ep, )
    cy.request('DELETE','https://api.trello.com/1/boards/bbcmmpJz', add)
    
    })
})