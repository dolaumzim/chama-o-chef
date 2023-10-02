describe('Testes de Signup', () => {
  it('Realizar Signup sem endereço', () => {
    cy.visit('/signup')
    cy.get('input[name="name"]').type('Armando Assini')
    cy.get('input[name="email"]').type('armando4@yahoo.com')
    cy.get('input[name="telephones_attributes[0].number"]').type('3132218772')
    cy.get('input[name="password"]').type('123321')
    cy.get('input[name="password_confirmation"]').type('123321')
    cy.get('[data-testid="submitButton"]').click()
    cy.url().should('equal', 'http://localhost:5173/login')
  }),

  it('Realizar Signup com endereço com autocomplete de rua, bairro, cidade e estado', () => {
    cy.visit('/signup')
    cy.get('input[name="name"]').type('Armando Assini')
    cy.get('input[name="email"]').type('armando3@yahoo.com')
    cy.get('input[name="telephones_attributes[0].number"]').type('3132218772')
    cy.get('input[name="password"]').type('123321')
    cy.get('input[name="password_confirmation"]').type('123321')
    cy.get('[data-testid="stepButton"]').click()
    cy.get('input[name="addresses_attributes[0].zip_code"]').type('35160101')
    cy.get('input[name="addresses_attributes[0].name"]').type('Casa Ipatinga')
    cy.get('input[name="addresses_attributes[0].number"]').type('105')
    cy.get('input[name="addresses_attributes[0].reference"]').type('Casa azul')
    cy.get('[data-testid="submitButton"]').click()
    cy.url().should('equal', 'http://localhost:5173/login')
  })
})