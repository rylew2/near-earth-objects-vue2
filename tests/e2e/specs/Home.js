// https://docs.cypress.io/api/introduction/api.html

describe("Home.vue", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".v-subheader", { timeout: 15000 }).should("be.visible");
  });

  it("Visits the app root url", () => {
    cy.contains("h1", "NASA Near Earth Objects");
  });

  it("Checks the start and end date today", () => {
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10);
    console.log("cypress today ==> ", today);
    cy.get("#startDate").should("have.value", today);
    cy.get("#endDate").should("have.value", today);
  });

  it("Checks the dates initialized to today", () => {
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10);
    console.log("cypress today ==> ", today);
    cy.get("#startDate").should("have.value", today);
    cy.get("#endDate").should("have.value", today);
  });

  it("Changes the start date back five days", () => {
    // set date five days back
    let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    today.setDate(today.getDate() - 5);
    const fiveDaysBack = today.toISOString().substr(0, 10);

    //enter new startDate
    cy.get("#startDate").type(fiveDaysBack);
    cy.get("h1").click();

    const longFormDate = new Date(fiveDaysBack).toString().slice(0, 15);

    //wait 15 seconds for data to load
    cy.get(".v-subheader", { timeout: 15000 }).should("be.visible");
    cy.contains(".v-subheader", longFormDate);
  });

  it("Changes the start date back ten days", () => {
    cy.get("h2").should("have.length", 0);
    let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    today.setDate(today.getDate() - 10);
    const tenDaysBack = today.toISOString().substr(0, 10);

    //enter new startDate
    cy.get("#startDate").type(tenDaysBack);
    cy.get("h1").click();

    cy.get("h2").should("have.length", 1);
  });

  it("Changes the end date ahead five days", () => {
    // set date five days back
    let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
    today.setDate(today.getDate() + 5);
    const fiveDaysAhead = today.toISOString().substr(0, 10);

    //enter new startDate
    cy.get("#endDate").type(fiveDaysAhead);
    cy.get("h1").click();

    const longFormDate = new Date(fiveDaysAhead).toString().slice(0, 15);
    cy.get(".v-subheader", { timeout: 15000 }).should("be.visible");
    cy.contains(".v-subheader", longFormDate);
  });
});
