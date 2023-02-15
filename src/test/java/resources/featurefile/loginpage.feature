Feature: Login Page

  As a user I want to login into nop commerce website

  Scenario:User should be able to navigate to login page successfully

    Given user is on nopcommerce homepage
    When user to click on login page
    Then I should navigate to log in page and see welcome text "Welcome, Please Sign In!"

  Scenario Outline: User should receive error message when login with invalid credentials

    Given user is on nopcommerce homepage
    When  user to click on login page
    Then user to enter invalid email address on email address field "<email address>"
    Then user to enter invalid password on password field "<password>"
    And User to click on login button
    Then User to see error message "<error message>"
    Examples:
      | email address         | password | error message                                                                              |
      | jonny123@gmail.com    | 123456   | Login was unsuccessful. Please correct the errors and try again. No customer account found |
      | jonny12113@gmail.com  | 123456   | Login was unsuccessful. Please correct the errors and try again. No customer account found |
      | jonny123456@gmail.com | 123456   | Login was unsuccessful. Please correct the errors and try again. No customer account found |

  Scenario: user should be able to log in with valid credentials
    Given user is on nopcommerce homepage
    When user to click on login page
    And user to enter emaill address on email address field "simran12@gmail.com"
    And user to enter password on password field "123456"
    And User to click on login button
    Then user to verify logout link display "Log out"

    Scenario: user should be able to log out successfully
      Given user is on nopcommerce homepage
      When user to click on login page
      And user to enter emaill address on email address field "simran12@gmail.com"
      And user to enter password on password field "123456"
      And User to click on login button
      And user to click on logout link
      Then user to verify to log in display "Log in"


