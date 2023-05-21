Feature: Login page test

  As a user I want to check login functionality successfully

  Background: I am on homepage

  @sanity
  Scenario: User should login successfully
    When I enter username
    And  I enter password
    And  I click on login button
    Then I navigate to Dashboard page
    And  I should verify WelCome message

  @smoke
  Scenario: User should see the Logo on homepage
    When I enter username
    And  I enter password
    Then I verify the logo
    And  I click on login button


  @regression
  Scenario: User should login and logout successfully
    When I enter username
    And  I enter password
    And  I click on login button
    Then I navigate to Dashboard page
    And  I click on User Profile Logo
    Then I mouse hoover on logout and click
    And  I should navigate to login page successfully
    And  I verify the text Login Panel is displayed