class ProductPage {
  addProducts(indexes) {
    indexes.forEach((i) => {
      cy.get(".inventory_item").eq(i).find("button").click();
    });
  }

  goToCart() {
    cy.get(".shopping_cart_link").click();
  }
}

export default ProductPage;
