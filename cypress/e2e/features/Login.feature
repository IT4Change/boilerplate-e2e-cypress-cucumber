Feature: Login
  As a user 
  I want to sign in
  I want to benoticed when sign in fails

  Background:
    Given The web browser is at the login page

  Scenario: Successful Login
    When I submit the credentials 'tomsmith' 'SuperSecretPassword!'
    Then I am on the welcome page

  # Scenario: Refresh and stay logged in
  #   Given I am logged in as "peter-pan"
  #   When I refresh the page
  #   Then I am logged in with username "Peter Pan"

  # Scenario: Log out
  #   Given I am logged in as "peter-pan"
  #   When I navigate to page "/"
  #   And I log out
  #   Then I am on page "login"