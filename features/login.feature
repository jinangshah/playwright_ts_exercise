@Login
Feature: Login Tests
    This Feature will test all valid & invalid Logins

    @regression @verifyValidLogin
    Scenario Outline: Verify Valid Login
        Given User Navigates to application
        And User enters username as "<username>"
        And User enters password as "<password>"
        Then User should be able to Login

        Examples:
        | username | password |
        | standard_user | secret_sauce |
        | visual_user | secret_sauce |
    
    @regression @verifyInvalidLogin
    Scenario Outline: Verify Invalid Login
        Given User Navigates to application
        And User enters username as "<username>"
        And User enters password as "<password>"
        Then User should not be able to Login

        Examples:
        | username | password |
        | standard_user | test |
        | admin | secret_sauce |
