describe('Testes de gerência do banco', () => {
  it('Teste de adição de cliente com sucesso', () => {
    addCliente()
  })
  it('Teste de adição de cliente com falha', () => {
    addClienteFail()
    addClienteFail()
    cy.on('window:alert', (texto) => {
    expect(texto).to.contains('Please check the details. Customer may be duplicate.');
  });
  })

  it('Teste de abertura de conta com sucesso', () => {
    let infos = addCliente()
    let customer = infos[0] + " " + infos[1]
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(customer)
    cy.get('#currency').select('Dollar')
    cy.get('form.ng-dirty > button').click()
    cy.on('window:alert', (texto) => {
      expect(texto).to.contains('Account created successfully with account Number :');
    });
  })

  it('Teste de abertura de conta com falha', () => {
    //Adicionar teste aqui
    let infos = addCliente()
    let customer = infos[0] + " " + infos[1]
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(customer)
    //não seleciona a moeda
    cy.get('form.ng-dirty > button').click() //clica em criar a conta
    cy.on('window:alert', (texto) => {
      expect(texto).to.notcontains('Account created successfully with account Number :');
    });

  })
})

function addCliente(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let nome = hora + minuto + seg + "nome" 
  let sobrenome = hora + minuto + seg + "sobrenome" 
  let codigo = hora + minuto + seg
  let infos = [nome, sobrenome, codigo]

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  cy.get(':nth-child(3) > .btn').click()
  cy.get('[ng-class="btnClass1"]').click()
  cy.get(':nth-child(1) > .form-control').type(nome)
  cy.get(':nth-child(2) > .form-control').type(sobrenome)
  cy.get(':nth-child(3) > .form-control').type(codigo)
  cy.get('form.ng-dirty > .btn').click()
  cy.on('window:alert', (texto) => {
    expect(texto).to.contains('Customer added successfully with customer id :');
  });

  return infos
}

function addClienteFail(){

  let nome = "nome" 
  let sobrenome = "sobrenome" 
  let codigo = 0
  let infos = [nome, sobrenome, codigo]

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  cy.get(':nth-child(3) > .btn').click()
  cy.get('[ng-class="btnClass1"]').click()
  cy.get(':nth-child(1) > .form-control').type(nome)
  cy.get(':nth-child(2) > .form-control').type(sobrenome)
  cy.get(':nth-child(3) > .form-control').type(codigo)
  cy.get('form.ng-dirty > .btn').click()

  return infos
}