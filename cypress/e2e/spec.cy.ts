describe("cypress vanilla", () => {
  it("types into input", () => {
    cy.visit("/");

    // select + assert
    cy.get("h1").should("contain.text", "Hello :)");

    // select + act + assert
    cy.get(".e2e-input")
      .type("Chuck Norris")
      .should("have.value", "Chuck Norris");
  });
});
