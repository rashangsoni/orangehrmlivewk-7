package com.orangehrmlive.steps;

import com.orangehrmlive.pages.AddUserPage;
import com.orangehrmlive.pages.ViewSysteamUsersPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class UserTestSteps {
    @And("^I click on Admin Tab$")
    public void iClickOnAdminTab() {
        new ViewSysteamUsersPage().clickAdminLink();
    }

    @And("^I verify System Users text$")
    public void iVerifySystemUsersText() {
        new ViewSysteamUsersPage().getSystemUserText();
    }

    @And("^I click on add button$")
    public void iClickOnAddButton() {
        new ViewSysteamUsersPage().clickAddButton();
    }

    @And("^I verify Add User text$")
    public void iVerifyAddUserText() {
        new ViewSysteamUsersPage().AddUser();
    }

    @Then("^I select User Role Admin$")
    public void iSelectUserRoleAdmin() throws InterruptedException {
        new ViewSysteamUsersPage().selectAdminRole();
    }

    @And("^I enter employee name \"([^\"]*)\"$")
    public void iEnterEmployeeName(String emp) throws InterruptedException {
        new ViewSysteamUsersPage().enterEmp(emp);
    }

    @And("^I select status Disable$")
    public void iSelectStatusDisable() throws InterruptedException {
        new ViewSysteamUsersPage().selectDisableOption();

    }
    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new ViewSysteamUsersPage().enterUser(username);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password){
        new ViewSysteamUsersPage().enterPass(password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new ViewSysteamUsersPage().enterConfirmPass(confirmPassword);
    }

    @Then("^I click on save button$")
    public void iClickOnSaveButton() {
        new ViewSysteamUsersPage().clickOnSaveButton();
    }

    @And("^I enter System Users Username \"([^\"]*)\"$")
    public void iEnterSystemUsersUsername(String username)  {
        new AddUserPage().enterUsername(username);
    }


    @And("^I select User Role$")
    public void iSelectUserRole() throws InterruptedException {
        new AddUserPage().selectUserRole();
    }

    @And("^I select Enable status$")
    public void iSelectEnableStatus() throws InterruptedException {
        new AddUserPage().selectStatusEnable();
    }

    @And("^I select Disable status$")
    public void iSelectDisableStatus() throws InterruptedException {
        new AddUserPage().selectStatusDisable();
    }

    @And("^I click on Search button$")
    public void iClickOnSearchButton() {
        new AddUserPage().clickSearchButton();
    }

    @Then("^I verify the user is in the result list$")
    public void iVerifyTheUserIsInTheResultList() throws InterruptedException {
        new AddUserPage().verifyResultList();

    }

    @And("^I click on checkbox$")
    public void iClickOnCheckbox() throws InterruptedException {
        new AddUserPage().clickOnCheckbox();
    }

    @Then("^I click on Delete button$")
    public void iClickOnDeleteButton() throws InterruptedException {
        new AddUserPage().clickDeleteButton();
    }


    @And("^I click on popup button$")
    public void iClickOnPopupButton() throws InterruptedException {
        new AddUserPage().popUpClick();

    }

    @Then("^I should be able to verify user Successfully Deleted$")
    public void iShouldBeAbleToVerifyUserSuccessfullyDeleted() {
        new AddUserPage().verifyMsgCheck();
    }

    @Then("^I verify No Records Found Text$")
    public void iVerifyNoRecordsFoundText() {
        new AddUserPage().VerifyNoRecordFound();
    }

}
