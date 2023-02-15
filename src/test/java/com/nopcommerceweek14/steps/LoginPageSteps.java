package com.nopcommerceweek14.steps;

import com.nopcommerceweek14.pages.HomePage;
import com.nopcommerceweek14.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginPageSteps {
    @Given("^user is on nopcommerce homepage$")
    public void user_is_on_nopcommerce_homepage(){
    }

    @When("^user to click on login page$")
    public void userToClickOnLoginPage() {
       new HomePage().clickOnLoginLink();
    }



    @Then("^user to enter invalid email address on email address field \"([^\"]*)\"$")
    public void userToEnterInvalidEmailAddressOnEmailAddressField(String emailadress) {
        new LoginPage().enterEmailId(emailadress);

    }

    @Then("^user to enter invalid password on password field \"([^\"]*)\"$")
    public void userToEnterInvalidPasswordOnPasswordField(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^User to click on login button$")
    public void userToClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^User to see error message \"([^\"]*)\"$")
    public void userToSeeErrorMessage(String error){
        new LoginPage().validaterror(error);

    }

    @And("^user to enter emaill address on email address field \"([^\"]*)\"$")
    public void userToEnterEmaillAddressOnEmailAddressField(String validemail) {
       new LoginPage().enterEmailId(validemail);
    }

    @And("^user to enter password on password field \"([^\"]*)\"$")
    public void userToEnterPasswordOnPasswordField(String validpassword) {
     new LoginPage().enterPassword(validpassword);
    }



    @And("^user to click on logout link$")
    public void userToClickOnLogoutLink() {
        new HomePage().logoOutLink();
    }


    @Then("^I should navigate to log in page and see welcome text \"([^\"]*)\"$")
    public void i_should_navigate_to_log_in_page_and_see_welcome_text(String welcome) {
        new LoginPage().getWelcomeText(welcome);

    }

    @Then("^user to verify to log in display \"([^\"]*)\"$")
    public void userToVerifyToLogInDisplay(String text)  {
        new HomePage().verifyLoginLink(text);
    }

    @Then("^user to verify logout link display \"([^\"]*)\"$")
    public void user_to_verify_logout_link_display(String logoutverify)   {
       new HomePage().verifylogoutext(logoutverify);

    }
}
