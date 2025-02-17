@project
Feature: End to End Test
    This Feature will test End to End Scenario of Logging in to the application & Placing a successful order

    @smoke @regression @verifyValidLogin
    Scenario Outline: Verify Valid & Invalid Login
        Given User Navigates to application
        And User enters username as "<username>"
        And User enters password as "<password>"
        Then User should be able to Login

        Examples:
        | username | password |
        | standard_user | secret_sauce |
     
    @smoke @regression @verifyDashBoard
    Scenario: Verify Dashboard
        Given User is on Dashboard Page
        Then Verify one of the products listed

    @smoke @regression @addToCart
    Scenario: Add a product to cart
        Given User Selects a product
        When Product is available
        Then User should be able to add product to cart
    
    @smoke @regression @checkout
    Scenario: Checkout Items
        Given Item is added to cart
        Then Proceed to Checkout
        Then Fill Shipping Information
        Then Verify Order Details
        Then Confirm Order
