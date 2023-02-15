package com.nopcommerceweek14.steps;

import com.nopcommerceweek14.pages.BuildYourOwnComputerPage;
import com.nopcommerceweek14.pages.ComputerPage;
import com.nopcommerceweek14.pages.DesktopsPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class ComputerPageSteps {
    @When("^user to click on computer tab$")
    public void user_to_click_on_computer_tab(){
        new ComputerPage().clickonComputertab();
    }


    @Then("^user to verify computer text \"([^\"]*)\"$")
    public void user_to_verify_computer_text(String text){
        new ComputerPage().getcomputerText(text);
    }

    @When("^user to click on Desktop link$")
    public void user_to_click_on_Desktop_link() {
        new ComputerPage().clickondesktoplink();
    }

    @Then("^User to verify desktop text \"([^\"]*)\"$")
    public void user_to_verify_desktop_text(String dis)  {
        new DesktopsPage().getDisplaytext(dis);
    }

    @When("^user to click on build your own computer$")
    public void user_to_click_on_build_your_own_computer() {
        new BuildYourOwnComputerPage().clickOnBuildyourcomputer();
    }

    @When("^I want to build my computer$")
    public void iWantToBuildMyComputer(DataTable dataTable) throws InterruptedException {
        List<List<String>> data = dataTable.raw();
        for (int i =0;i< data.size();i++){
            new BuildYourOwnComputerPage().makeyourown(data.get(i).get(0),data.get(i).get(1),data.get(i).get(2),data.get(i).get(3),data.get(i).get(4));
            new BuildYourOwnComputerPage();
        }
    }
}
