class OrderCompletePage {
  verifySuccess() {
    cy.contains("Thank you for your order").should("be.visible");
  }
}

export default OrderCompletePage;
