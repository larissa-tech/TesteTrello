describe('Testando api',() => {

    it('DELETE cartao', () => {

    const add = { 
    "key"   :   "763285633265aadd23f47c6e3c60d7a2",
    "token" :   "9ee856a66ee16cd83cefc58b3151902e917d25ce7096d040e56b594143000a18",
    }
    //ids válidos para teste de exclusão
    //63637c56cc4d6303c83c8970
    //635fea2458829a022276d07c
    //636016b58da8a300d8cc808b
    cy.request('DELETE','https://api.trello.com/1/cards/635fd7782470cb01a38170cf',add)
  
    })
})
