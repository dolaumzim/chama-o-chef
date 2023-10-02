describe('Teste de navegação', () => {
  it('Realizar navegação até a página de detalhes de um produto e curtir/descutir', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('arm.assini@gmail.com');
    cy.get('input[name="password"]').type('123321');
    cy.get('#submitButton').click();
    cy.get('#searchBar').type('cintu');
    cy.get(
      'img[src="http://academy-react.rarolabs.com.br/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1WW1VME1qY3hZaTFpTTJJd0xUUm1ZelV0WVRBMVl5MDJZVEk0WW1VNVpEbGxZemNHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--15c94592863658b03081212c74db52cf0281370c/cintura%CC%83o%20do%20aventureiro.JPG"]'
    ).click();
    cy.url().should(
      'equal',
      'http://localhost:5173/dishes/3fa0bfc2-3e78-4909-a2ba-85b9fdcc5cf3'
    );
    cy.intercept(
      'http://academy-react.rarolabs.com.br/api/v1/dishes/3fa0bfc2-3e78-4909-a2ba-85b9fdcc5cf3/like'
    ).as('likeRequest'); // Replace 'YOUR_REQUEST_URL' with the actual URL
    cy.get('[data-testid="like"]').click();
    cy.wait('@likeRequest').its('response.statusCode').should('eq', 204);
  });
});
