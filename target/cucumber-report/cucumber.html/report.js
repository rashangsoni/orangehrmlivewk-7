$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login page test",
  "description": "\r\nAs a user I want to check login functionality successfully",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7886915600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should login successfully",
  "description": "",
  "id": "login-page-test;user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I navigate to Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should verify WelCome message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 625674400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 125410800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 98197400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iNavigateToDashboardPage()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldVerifyWelComeMessage()"
});
formatter.result({
  "duration": 1005613900,
  "status": "passed"
});
formatter.after({
  "duration": 715436300,
  "status": "passed"
});
formatter.uri("UserTest.feature");
formatter.feature({
  "line": 1,
  "name": "Users Test",
  "description": "As a user I should verify employee successfully",
  "id": "users-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6185586900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "I should add user successfully",
  "description": "",
  "id": "users-test;i-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on Admin Tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify System Users text",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify Add User text",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select User Role Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter employee name \"Goutam Ganesh\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter username \"Mehek\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"Prime12345*\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter confirm password \"Prime12345*\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 383476800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 134804900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 93870200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2455679000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 279133500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 407962900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 234584000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 2132056400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goutam Ganesh",
      "offset": 23
    }
  ],
  "location": "UserTestSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 1251748500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mehek",
      "offset": 18
    }
  ],
  "location": "UserTestSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 114068600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusDisable()"
});
formatter.result({
  "duration": 2152261900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime12345*",
      "offset": 18
    }
  ],
  "location": "UserTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 102361400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime12345*",
      "offset": 26
    }
  ],
  "location": "UserTestSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 107187900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 61777500,
  "status": "passed"
});
formatter.after({
  "duration": 721855200,
  "status": "passed"
});
});