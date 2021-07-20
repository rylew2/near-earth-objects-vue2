// https://docs.cypress.io/api/introduction/api.html

describe("NEODetail.vue", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".v-subheader", { timeout: 15000 }).should("be.visible");
    cy.get("tbody tr:first-of-type").click();
  });

  it("Banner still showing", () => {
    cy.contains("h1", "NASA Near Earth Objects");
  });

  it("Image visible", () => {
    cy.get("img", { timeout: 5000 }).should("be.visible");
  });

  it("Details exist", () => {
    //asteroid name
    cy.get(
      ":nth-child(1) > .v-list-item__content > .v-list-item__title"
    ).should("be.visible");

    cy.get(".v-tab--active").contains("Basics");

    cy.get(".v-slide-group__content > :nth-child(2)").contains("Size");

    cy.get(".v-slide-group__content > :nth-child(3)").contains(
      "Closest Approaches"
    );

    // check asteroid detail content exists
    cy.get(
      ":nth-child(1) > .v-list-item__content > .v-list-item__subtitle"
    ).contains(/^[A-Za-z0-9)(]+/);

    cy.get(
      ":nth-child(2) > .v-list-item__content > .v-list-item__subtitle"
    ).contains(/^[A-Za-z0-9)(]+/);

    cy.get(
      ":nth-child(4) > .v-list-item__content > .v-list-item__subtitle"
    ).contains(/^[A-Za-z0-9)(]+/);
  });

  it("Link opens in new tab", () => {
    cy.get(".v-list-item__subtitle > a").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("Size vertical tab opens and has data", () => {
    cy.get(".v-slide-group__content > :nth-child(2)").click();
    cy.get(
      ".v-window-item--active > .v-card > .v-card__text > .v-list > :nth-child(1) > .v-list-item__content > .v-list-item__subtitle"
    ).contains(/^[A-Za-z0-9)(]+/);
  });

  it("Closest Approaches vertical tab opens and has data", () => {
    cy.get(".v-slide-group__content > :nth-child(3)").click();

    cy.get(
      ".v-card__text > :nth-child(1) > .v-list-item__content > .v-list-item__title"
    ).contains(/^Top [0-5]+ Closest Approaches/);
  });

  it("Clicking back link returns home", () => {
    cy.get(".router-link-active > .v-icon").click();
    cy.get("#startDate").should("be.visible");
    cy.get("#endDate").should("be.visible");
  });
});
