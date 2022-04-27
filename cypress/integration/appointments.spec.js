describe('Appointments', () => {

  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains('[data-testid=day]', "Monday");

  })

  it("should book an interview", () => {
    cy.get('[alt=Add]')
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Capitan UnderPants");

    cy.get('[alt="Sylvia Palmer"]')
      .click();

    cy.get('.button--confirm')
      .click();

    cy.contains(".appointment__card--show", "Capitan UnderPants");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    cy.get('[alt=Edit]')
      .first()
      .click({ force: true })

    cy.get("[data-testid=student-name-input]").clear().type("Sir Meowzer");
    cy.get("[alt='Tori Malcolm']").click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Sir Meowzer");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

})