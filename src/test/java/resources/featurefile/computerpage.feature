Feature: Computer Page

  As a user I should be able to navigate to computer page successfully and build my own computer

  Scenario: As a user I should be able navigate to computer page
    Given user is on nopcommerce homepage
    When user to click on computer tab
    Then user to verify computer text "Computers"

  Scenario: As a user I should be able to navigate to Desktop page successfully
    Given user is on nopcommerce homepage
    When user to click on computer tab
    And user to click on Desktop link
    Then User to verify desktop text "Desktops"

  Scenario: As a user I should be able to build my own computer
    Given user is on nopcommerce homepage
    When user to click on computer tab
    And user to click on Desktop link
    And user to click on build your own computer
    And I want to build my computer

      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | VistaHome [+$50.00]     | Total Commander [+$5.00]   |





