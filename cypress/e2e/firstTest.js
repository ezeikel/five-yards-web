describe("first test", () => {
  it("should be on the homepage", () => {
    cy.visit("/")
      .url()
      .should("eq", `${Cypress.config().baseUrl}/`);
  });
});
