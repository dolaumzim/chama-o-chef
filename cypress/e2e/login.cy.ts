describe('Testes de Login', () => {
  it('Realizar Login com sucesso', () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type('arm.assini@gmail.com')
    cy.get('input[name="password"]').type('123321')
    cy.get('[data-testid="submitButton"]').click()
    cy.url().should('equal', 'http://localhost:5173/home')
  })

  it('Tentar Login com usuário não cadastrado', () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type('arm.assini@gmail.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('[data-testid="submitButton"]').click()
    cy.contains('Email ou senha incorretos')
  })
})

