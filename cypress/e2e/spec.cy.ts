describe("cypress vanilla", () => {
  it("types into input", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Hello :)");
    cy.wait(3000);
    cy.get(".e2e-input").type("Chuck Norris");
  });
});
