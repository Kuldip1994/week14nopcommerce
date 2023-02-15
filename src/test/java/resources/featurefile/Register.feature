Feature: Resgister

  As a user I should be able to navigate to register page and successfully register

  Scenario: As a user I should be able to navigate to register page successfully
    Given user is on nopcommerce homepage
    When user to click on register link
    Then I should navigate to register page "Register"

  Scenario Outline: User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory
    Given user is on nopcommerce homepage
    When user to click on register link
    Then user to click on register button
    And user to enter firtname f "<firstname>"
    And user to enter lname l "<lname>"
    And user should to select d "<day>"
    And user should to select m "<Month>"
    And user should to select y "<year>"
    And user to enter e "<email>"
    And user to enter p "<Password>"
    And user to enter cp"<confirmpassword>"
    And user to click on register button
    And user to verify error messages "<error message>"

    Examples:
      | firstname | lname | day | Month | year | email             | Password | confirmpassword | error message          |
      |           | jame  | 1   | June  | 1996 | jane124@gmail.com | 123456    | 123456           | Firstname is required. |
      | james     |       | 1   | June  | 1996 | jane124@gmail.com | 123456    | 123456           | Last name is required. |
      | james     | jame  | 1   | June  | 1996 |                   | 123456    | 123456           | Email is required.     |
      | james     | jame  | 1   | June  | 1996 | jane124@gmail.com |          | 123456           | Password is required.  |
      | james     | jame  | 1   | June  | 1996 | jane124@gmail.com | 123456   |                 | Password is required.  |

  Scenario: User should create account successfully

    Given user is on nopcommerce homepage
    When user to click on register link
    And I enter following user details

      | kyle    | jon    | 3  | June   | 1998 | kyle1234@gmail.com   | 123456 | 123456 |
      | hardik  | pandya | 11 | July   | 1994 | hardik1234@gmail.com | 123456 | 123456 |
      | shubman | gill   | 25 | August | 1988 | sgill1234@gmail.com  | 123456 | 123456 |



