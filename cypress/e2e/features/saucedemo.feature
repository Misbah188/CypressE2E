Feature: SauceDemo E2E Shopping Scenarios

  Scenario: User logs in and adds products
    Given user opens the SauceDemo website
    When user logs in with username "standard_user" and password "secret_sauce"
    Then user should see the products page

  Scenario: User adds and removes product from cart
    Given user adds "Sauce Labs Backpack" to the cart
    And user goes to the cart page
    Then cart should contain "Sauce Labs Backpack"

  Scenario: User completes checkout
    Given user proceeds to checkout
    And user enters first name "John", last name "Doe", and zip "12345"
    Then order should be completed successfully
