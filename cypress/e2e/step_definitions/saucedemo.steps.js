import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import OrderCompletePage from "../pages/orderCompletePage";

const loginPage = new LoginPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const orderCompletePage = new OrderCompletePage();

// Scenario: User logs in and adds products
Given("user opens the SauceDemo website", () => {
  loginPage.visit();
});

When("user logs in with username {string} and password {string}", (username, password) => {
  loginPage.login(username, password);
});

Then("user should see the products page", () => {
  productPage.verifyProductsPage();
});

// Scenario: User adds and removes product from cart
Given("user adds {string} to the cart", (productName) => {
  productPage.addProductToCart(productName);
});

Given("user goes to the cart page", () => {
  productPage.goToCart();
});

Then("cart should contain {string}", (productName) => {
  cartPage.verifyProductInCart(productName);
});

// Scenario: User completes checkout
Given("user proceeds to checkout", () => {
  cartPage.checkout();
});

Given("user enters first name {string}, last name {string}, and zip {string}", (firstName, lastName, zip) => {
  checkoutPage.fillInformation(firstName, lastName, zip);
  checkoutPage.continueCheckout();
  checkoutPage.finishCheckout();
});

Then("order should be completed successfully", () => {
  orderCompletePage.verifyOrderComplete();
});
