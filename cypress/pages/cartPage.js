class CartPage {
  verifyCartItemCount(expected) {
    cy.get(".cart_item").should("have.length", expected);
  }

  removeFirstItem() {
    cy.get(".cart_item").first().find("button").click();
  }

  continueShopping() {
    cy.get('[data-test="continue-shopping"]').click();
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default CartPage;
