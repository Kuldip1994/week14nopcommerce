$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Resgister",
  "description": "\r\nAs a user I should be able to navigate to register page and successfully register",
  "id": "resgister",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11160254800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As a user I should be able to navigate to register page successfully",
  "description": "",
  "id": "resgister;as-a-user-i-should-be-able-to-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 187162800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 1282203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 36
    }
  ],
  "location": "RegisterPageStep.iShouldNavigateToRegisterPage(String)"
});
formatter.result({
  "duration": 94146200,
  "status": "passed"
});
formatter.after({
  "duration": 967917100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user to enter firtname f \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user to enter lname l \"\u003clname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should to select d \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should to select m \"\u003cMonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should to select y \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user to enter e \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to enter p \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to enter cp\"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to verify error messages \"\u003cerror message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lname",
        "day",
        "Month",
        "year",
        "email",
        "Password",
        "confirmpassword",
        "error message"
      ],
      "line": 26,
      "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "",
        "jame",
        "1",
        "June",
        "1996",
        "jane124@gmail.com",
        "123456",
        "123456",
        "Firstname is required."
      ],
      "line": 27,
      "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "james",
        "",
        "1",
        "June",
        "1996",
        "jane124@gmail.com",
        "123456",
        "123456",
        "Last name is required."
      ],
      "line": 28,
      "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "james",
        "jame",
        "1",
        "June",
        "1996",
        "",
        "123456",
        "123456",
        "Email is required."
      ],
      "line": 29,
      "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "james",
        "jame",
        "1",
        "June",
        "1996",
        "jane124@gmail.com",
        "",
        "123456",
        "Password is required."
      ],
      "line": 30,
      "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "james",
        "jame",
        "1",
        "June",
        "1996",
        "jane124@gmail.com",
        "123456",
        "",
        "Password is required."
      ],
      "line": 31,
      "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5654123300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user to enter firtname f \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user to enter lname l \"jame\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should to select d \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should to select m \"June\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should to select y \"1996\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user to enter e \"jane124@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to enter p \"123456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to enter cp\"123456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to verify error messages \"Firstname is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 2106768900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 87826500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "RegisterPageStep.userToEnterFirtnameF(String)"
});
formatter.result({
  "duration": 71647000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jame",
      "offset": 23
    }
  ],
  "location": "RegisterPageStep.userToEnterLnameL(String)"
});
formatter.result({
  "duration": 101937200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectD(String)"
});
formatter.result({
  "duration": 88574200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectM(String)"
});
formatter.result({
  "duration": 75133000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1996",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectY(String)"
});
formatter.result({
  "duration": 80194200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jane124@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterE(String)"
});
formatter.result({
  "duration": 112704600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterP(String)"
});
formatter.result({
  "duration": 99342200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterCp(String)"
});
formatter.result({
  "duration": 99702100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 49006700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Firstname is required.",
      "offset": 31
    }
  ],
  "location": "RegisterPageStep.userToVerifyErrorMessages(String)"
});
formatter.result({
  "duration": 41214200,
  "status": "passed"
});
formatter.after({
  "duration": 807529200,
  "status": "passed"
});
formatter.before({
  "duration": 5542955400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user to enter firtname f \"james\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user to enter lname l \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should to select d \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should to select m \"June\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should to select y \"1996\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user to enter e \"jane124@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to enter p \"123456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to enter cp\"123456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to verify error messages \"Last name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 37900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 1093016500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 179726700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "james",
      "offset": 26
    }
  ],
  "location": "RegisterPageStep.userToEnterFirtnameF(String)"
});
formatter.result({
  "duration": 147194500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "RegisterPageStep.userToEnterLnameL(String)"
});
formatter.result({
  "duration": 156194600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectD(String)"
});
formatter.result({
  "duration": 157459800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectM(String)"
});
formatter.result({
  "duration": 164629400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1996",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectY(String)"
});
formatter.result({
  "duration": 145207100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jane124@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterE(String)"
});
formatter.result({
  "duration": 203314800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterP(String)"
});
formatter.result({
  "duration": 169388100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterCp(String)"
});
formatter.result({
  "duration": 158875500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 81076600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 31
    }
  ],
  "location": "RegisterPageStep.userToVerifyErrorMessages(String)"
});
formatter.result({
  "duration": 59044200,
  "status": "passed"
});
formatter.after({
  "duration": 866305900,
  "status": "passed"
});
formatter.before({
  "duration": 3899609600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user to enter firtname f \"james\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user to enter lname l \"jame\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should to select d \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should to select m \"June\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should to select y \"1996\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user to enter e \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to enter p \"123456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to enter cp\"123456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to verify error messages \"Email is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 637430000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 127977100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "james",
      "offset": 26
    }
  ],
  "location": "RegisterPageStep.userToEnterFirtnameF(String)"
});
formatter.result({
  "duration": 130276900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jame",
      "offset": 23
    }
  ],
  "location": "RegisterPageStep.userToEnterLnameL(String)"
});
formatter.result({
  "duration": 166821800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectD(String)"
});
formatter.result({
  "duration": 126978800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectM(String)"
});
formatter.result({
  "duration": 126133800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1996",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectY(String)"
});
formatter.result({
  "duration": 140018900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterE(String)"
});
formatter.result({
  "duration": 114879200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterP(String)"
});
formatter.result({
  "duration": 168419400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterCp(String)"
});
formatter.result({
  "duration": 183574100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 85385000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 31
    }
  ],
  "location": "RegisterPageStep.userToVerifyErrorMessages(String)"
});
formatter.result({
  "duration": 54113100,
  "status": "passed"
});
formatter.after({
  "duration": 862624400,
  "status": "passed"
});
formatter.before({
  "duration": 3634965500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user to enter firtname f \"james\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user to enter lname l \"jame\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should to select d \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should to select m \"June\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should to select y \"1996\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user to enter e \"jane124@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to enter p \"\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to enter cp\"123456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to verify error messages \"Password is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 70300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 1042176700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 141709200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "james",
      "offset": 26
    }
  ],
  "location": "RegisterPageStep.userToEnterFirtnameF(String)"
});
formatter.result({
  "duration": 128995200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jame",
      "offset": 23
    }
  ],
  "location": "RegisterPageStep.userToEnterLnameL(String)"
});
formatter.result({
  "duration": 148865100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectD(String)"
});
formatter.result({
  "duration": 122195700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectM(String)"
});
formatter.result({
  "duration": 136608800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1996",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectY(String)"
});
formatter.result({
  "duration": 132049200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jane124@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterE(String)"
});
formatter.result({
  "duration": 210311900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterP(String)"
});
formatter.result({
  "duration": 129284900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterCp(String)"
});
formatter.result({
  "duration": 166717600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 76440200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 31
    }
  ],
  "location": "RegisterPageStep.userToVerifyErrorMessages(String)"
});
formatter.result({
  "duration": 45955900,
  "status": "passed"
});
formatter.after({
  "duration": 813971700,
  "status": "passed"
});
formatter.before({
  "duration": 3418033300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User to verify Firstname, Lastname, email, password and confirm password fields are Mandatory",
  "description": "",
  "id": "resgister;user-to-verify-firstname,-lastname,-email,-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user to enter firtname f \"james\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user to enter lname l \"jame\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should to select d \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should to select m \"June\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should to select y \"1996\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user to enter e \"jane124@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to enter p \"123456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user to enter cp\"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user to click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user to verify error messages \"Password is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 1066843200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 157784700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "james",
      "offset": 26
    }
  ],
  "location": "RegisterPageStep.userToEnterFirtnameF(String)"
});
formatter.result({
  "duration": 126124500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jame",
      "offset": 23
    }
  ],
  "location": "RegisterPageStep.userToEnterLnameL(String)"
});
formatter.result({
  "duration": 154570900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectD(String)"
});
formatter.result({
  "duration": 125693500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectM(String)"
});
formatter.result({
  "duration": 124735000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1996",
      "offset": 25
    }
  ],
  "location": "RegisterPageStep.userShouldToSelectY(String)"
});
formatter.result({
  "duration": 134226500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jane124@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterE(String)"
});
formatter.result({
  "duration": 196837600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterP(String)"
});
formatter.result({
  "duration": 180499900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "RegisterPageStep.userToEnterCp(String)"
});
formatter.result({
  "duration": 119308500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.userToClickOnRegisterButton()"
});
formatter.result({
  "duration": 77355400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 31
    }
  ],
  "location": "RegisterPageStep.userToVerifyErrorMessages(String)"
});
formatter.result({
  "duration": 50188700,
  "status": "passed"
});
formatter.after({
  "duration": 835380500,
  "status": "passed"
});
formatter.before({
  "duration": 3344988300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User should create account successfully",
  "description": "",
  "id": "resgister;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user to click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter following user details",
  "rows": [
    {
      "cells": [
        "kyle",
        "jon",
        "3",
        "June",
        "1998",
        "kyle1234@gmail.com",
        "123456",
        "123456"
      ],
      "line": 39
    },
    {
      "cells": [
        "hardik",
        "pandya",
        "11",
        "July",
        "1994",
        "hardik1234@gmail.com",
        "123456",
        "123456"
      ],
      "line": 40
    },
    {
      "cells": [
        "shubman",
        "gill",
        "25",
        "August",
        "1988",
        "sgill1234@gmail.com",
        "123456",
        "123456"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.user_to_click_on_register_link()"
});
formatter.result({
  "duration": 1074621600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageStep.i_enter_following_user_details(DataTable)"
});
formatter.result({
  "duration": 55583050800,
  "status": "passed"
});
formatter.after({
  "duration": 861954600,
  "status": "passed"
});
formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page",
  "description": "\r\nAs a user I should be able to navigate to computer page successfully and build my own computer",
  "id": "computer-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2793846600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As a user I should be able navigate to computer page",
  "description": "",
  "id": "computer-page;as-a-user-i-should-be-able-navigate-to-computer-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user to click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user to verify computer text \"Computers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.user_to_click_on_computer_tab()"
});
formatter.result({
  "duration": 599351300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 30
    }
  ],
  "location": "ComputerPageSteps.user_to_verify_computer_text(String)"
});
formatter.result({
  "duration": 36601200,
  "status": "passed"
});
formatter.after({
  "duration": 862953500,
  "status": "passed"
});
formatter.before({
  "duration": 4430874400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As a user I should be able to navigate to Desktop page successfully",
  "description": "",
  "id": "computer-page;as-a-user-i-should-be-able-to-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user to click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user to click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User to verify desktop text \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.user_to_click_on_computer_tab()"
});
formatter.result({
  "duration": 3562516200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.user_to_click_on_Desktop_link()"
});
formatter.result({
  "duration": 20624416000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 29
    }
  ],
  "location": "ComputerPageSteps.user_to_verify_desktop_text(String)"
});
formatter.result({
  "duration": 59216600,
  "status": "passed"
});
formatter.after({
  "duration": 914000200,
  "status": "passed"
});
formatter.before({
  "duration": 3689287900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a user I should be able to build my own computer",
  "description": "",
  "id": "computer-page;as-a-user-i-should-be-able-to-build-my-own-computer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user to click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user to click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user to click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I want to build my computer",
  "rows": [
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 23
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 24
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.user_to_click_on_computer_tab()"
});
formatter.result({
  "duration": 3150088500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.user_to_click_on_Desktop_link()"
});
formatter.result({
  "duration": 20605821200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.user_to_click_on_build_your_own_computer()"
});
formatter.result({
  "duration": 21529244900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iWantToBuildMyComputer(DataTable)"
});
formatter.result({
  "duration": 25352797800,
  "status": "passed"
});
formatter.after({
  "duration": 839552400,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "\r\nAs a user I want to login into nop commerce website",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4662256800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to login page successfully",
  "description": "",
  "id": "login-page;user-should-be-able-to-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to log in page and see welcome text \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginPage()"
});
formatter.result({
  "duration": 2037799300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 55
    }
  ],
  "location": "LoginPageSteps.i_should_navigate_to_log_in_page_and_see_welcome_text(String)"
});
formatter.result({
  "duration": 86762000,
  "status": "passed"
});
formatter.after({
  "duration": 895208600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should receive error message when login with invalid credentials",
  "description": "",
  "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user to enter invalid email address on email address field \"\u003cemail address\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user to enter invalid password on password field \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User to see error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email address",
        "password",
        "error message"
      ],
      "line": 20,
      "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "jonny123@gmail.com",
        "123456",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 21,
      "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "jonny12113@gmail.com",
        "123456",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 22,
      "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "jonny123456@gmail.com",
        "123456",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 23,
      "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3347265100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should receive error message when login with invalid credentials",
  "description": "",
  "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user to enter invalid email address on email address field \"jonny123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user to enter invalid password on password field \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User to see error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginPage()"
});
formatter.result({
  "duration": 602087000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jonny123@gmail.com",
      "offset": 60
    }
  ],
  "location": "LoginPageSteps.userToEnterInvalidEmailAddressOnEmailAddressField(String)"
});
formatter.result({
  "duration": 165677300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 50
    }
  ],
  "location": "LoginPageSteps.userToEnterInvalidPasswordOnPasswordField(String)"
});
formatter.result({
  "duration": 123303900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginButton()"
});
formatter.result({
  "duration": 498373600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 27
    }
  ],
  "location": "LoginPageSteps.userToSeeErrorMessage(String)"
});
formatter.result({
  "duration": 20027048700,
  "status": "passed"
});
formatter.after({
  "duration": 959439800,
  "status": "passed"
});
formatter.before({
  "duration": 5206896500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should receive error message when login with invalid credentials",
  "description": "",
  "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user to enter invalid email address on email address field \"jonny12113@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user to enter invalid password on password field \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User to see error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginPage()"
});
formatter.result({
  "duration": 581593900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jonny12113@gmail.com",
      "offset": 60
    }
  ],
  "location": "LoginPageSteps.userToEnterInvalidEmailAddressOnEmailAddressField(String)"
});
formatter.result({
  "duration": 151287900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 50
    }
  ],
  "location": "LoginPageSteps.userToEnterInvalidPasswordOnPasswordField(String)"
});
formatter.result({
  "duration": 118315900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginButton()"
});
formatter.result({
  "duration": 451110700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 27
    }
  ],
  "location": "LoginPageSteps.userToSeeErrorMessage(String)"
});
formatter.result({
  "duration": 20014853100,
  "status": "passed"
});
formatter.after({
  "duration": 928982000,
  "status": "passed"
});
formatter.before({
  "duration": 4827423000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should receive error message when login with invalid credentials",
  "description": "",
  "id": "login-page;user-should-receive-error-message-when-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user to enter invalid email address on email address field \"jonny123456@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user to enter invalid password on password field \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User to see error message \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginPage()"
});
formatter.result({
  "duration": 1782068000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jonny123456@gmail.com",
      "offset": 60
    }
  ],
  "location": "LoginPageSteps.userToEnterInvalidEmailAddressOnEmailAddressField(String)"
});
formatter.result({
  "duration": 80836400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 50
    }
  ],
  "location": "LoginPageSteps.userToEnterInvalidPasswordOnPasswordField(String)"
});
formatter.result({
  "duration": 73485500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginButton()"
});
formatter.result({
  "duration": 451386300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 27
    }
  ],
  "location": "LoginPageSteps.userToSeeErrorMessage(String)"
});
formatter.result({
  "duration": 20048020600,
  "status": "passed"
});
formatter.after({
  "duration": 789748000,
  "status": "passed"
});
formatter.before({
  "duration": 4388314900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should be able to log in with valid credentials",
  "description": "",
  "id": "login-page;user-should-be-able-to-log-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user to enter emaill address on email address field \"simran12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user to enter password on password field \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user to verify logout link display \"Log out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 37700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginPage()"
});
formatter.result({
  "duration": 2337795000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simran12@gmail.com",
      "offset": 53
    }
  ],
  "location": "LoginPageSteps.userToEnterEmaillAddressOnEmailAddressField(String)"
});
formatter.result({
  "duration": 107194100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "LoginPageSteps.userToEnterPasswordOnPasswordField(String)"
});
formatter.result({
  "duration": 76030900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginButton()"
});
formatter.result({
  "duration": 577262200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 36
    }
  ],
  "location": "LoginPageSteps.user_to_verify_logout_link_display(String)"
});
formatter.result({
  "duration": 54564200,
  "status": "passed"
});
formatter.after({
  "duration": 759338800,
  "status": "passed"
});
formatter.before({
  "duration": 2974930700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "user should be able to log out successfully",
  "description": "",
  "id": "login-page;user-should-be-able-to-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user is on nopcommerce homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user to click on login page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user to enter emaill address on email address field \"simran12@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user to enter password on password field \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user to click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user to verify to log in display \"Log in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_nopcommerce_homepage()"
});
formatter.result({
  "duration": 262000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginPage()"
});
formatter.result({
  "duration": 471155600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simran12@gmail.com",
      "offset": 53
    }
  ],
  "location": "LoginPageSteps.userToEnterEmaillAddressOnEmailAddressField(String)"
});
formatter.result({
  "duration": 97667300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "LoginPageSteps.userToEnterPasswordOnPasswordField(String)"
});
formatter.result({
  "duration": 71469800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLoginButton()"
});
formatter.result({
  "duration": 587032800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userToClickOnLogoutLink()"
});
formatter.result({
  "duration": 20630357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 34
    }
  ],
  "location": "LoginPageSteps.userToVerifyToLogInDisplay(String)"
});
formatter.result({
  "duration": 69117100,
  "status": "passed"
});
formatter.after({
  "duration": 945429000,
  "status": "passed"
});
});