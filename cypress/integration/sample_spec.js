describe("Homepage loads", () => {
  it("'/' redirects to '/en-us'", () => {
    cy.visit("http://localhost:9000/")
    cy.url().should("include", "/en-us")
  })
  it("contains jumbotron section", () => {})

  it("contains about - video section", () => {})

  it("contains projects section", () => {})

  it("contains footer section", () => {})
})
