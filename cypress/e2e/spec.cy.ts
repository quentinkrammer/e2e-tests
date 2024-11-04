describe("cypress vanilla", () => {
  it("types into input", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Hello :)");

    cy.get(".e2e-input")
      .type("Chuck Norris")
      .should("have.value", "Chuck Norris");
  });
});
