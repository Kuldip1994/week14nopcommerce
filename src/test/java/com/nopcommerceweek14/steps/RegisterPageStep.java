package com.nopcommerceweek14.steps;

import com.nopcommerceweek14.pages.HomePage;
import com.nopcommerceweek14.pages.LoginPage;
import com.nopcommerceweek14.pages.RegisterPage;
import com.sun.org.apache.bcel.internal.generic.NEW;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.es.Y;
import org.testng.Assert;

import java.util.List;

public class RegisterPageStep {
    @When("^user to click on register link$")
    public void user_to_click_on_register_link() throws Throwable {
        new HomePage().clickOnRegisterLink();
    }


    @Then("^user to click on register button$")
    public void userToClickOnRegisterButton() {
        new RegisterPage().RegisterButton();
    }

    @And("^user to verify error messages \"([^\"]*)\"$")
    public void userToVerifyErrorMessages(String messageserror){
     new RegisterPage().getvaliderrormess(messageserror);

    }

    @When("^I enter following user details$")
    public void i_enter_following_user_details(DataTable dataTable) throws Throwable{
        List<List<String>> data = dataTable.raw();
        for (int i = 0;i< data.size();i++){
            new RegisterPage().register(data.get(i).get(0),data.get(i).get(1),data.get(i).get(2),data.get(i).get(3),data.get(i).get(4),data.get(i).get(5),data.get(i).get(6),data.get(i).get(7));
            new HomePage().clickOnRegisterLink();
        }
    }

    @And("^user to enter firtname f \"([^\"]*)\"$")
    public void userToEnterFirtnameF(String FName) {
        new RegisterPage().Firstname(FName);
    }

    @And("^user to enter lname l \"([^\"]*)\"$")
    public void userToEnterLnameL(String LName)  {
       new RegisterPage().Lastname(LName);
    }

    @And("^user should to select d \"([^\"]*)\"$")
    public void userShouldToSelectD(String Day)  {
        new RegisterPage().DayofBirthdaydrop(Day);

    }

    @And("^user should to select m \"([^\"]*)\"$")
    public void userShouldToSelectM(String Month)  {
        new RegisterPage().Monthofbirth(Month);
    }

    @And("^user should to select y \"([^\"]*)\"$")
    public void userShouldToSelectY(String Year)  {
        new RegisterPage().YearofBorn(Year);
    }

    @And("^user to enter e \"([^\"]*)\"$")
    public void userToEnterE(String email) {
        new RegisterPage().emailAddress(email);

    }

    @And("^user to enter p \"([^\"]*)\"$")
    public void userToEnterP(String pass)  {
        new RegisterPage().password(pass);
    }

    @And("^user to enter cp\"([^\"]*)\"$")
    public void userToEnterCp(String cpassWord)  {
        new RegisterPage().confirmpassword(cpassWord);

    }

    @Then("^I should navigate to register page \"([^\"]*)\"$")
    public void iShouldNavigateToRegisterPage(String register)  {
        new RegisterPage().RegisterText(register);


    }
}
