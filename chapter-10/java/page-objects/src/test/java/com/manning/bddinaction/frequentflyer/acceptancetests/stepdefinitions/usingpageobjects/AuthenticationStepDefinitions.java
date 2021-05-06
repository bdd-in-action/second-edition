package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions.usingpageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FrequentFlyer;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.CurrentUser;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.LoginPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.assertj.core.api.Assertions.assertThat;

public class AuthenticationStepDefinitions {

    FrequentFlyer frequentFlyer;

    private LoginPage loginPage() { return new LoginPage(WebTestSupport.currentDriver()); }

    @Given("{} is a registered Frequency Flyer member")
    public void frequentFlyerMember(FrequentFlyer frequentFlyer) {
        this.frequentFlyer = frequentFlyer;
    }

    @When("^s?he (?:logs|has logged) on with a valid username and password$")
    public void logsOnWithAValidUsernameAndPassword() {
        LoginPage loginPage = new LoginPage(WebTestSupport.currentDriver());
        loginPage.open();
        loginPage.signinWithCredentials(frequentFlyer.email, frequentFlyer.password);
    }

    @Then("he/she should be given access to his/her account")
    public void heShouldBeGivenAccessToHisAccount() {
        CurrentUser currentUser = new CurrentUser(WebTestSupport.currentDriver());
        assertThat(currentUser.email()).isEqualTo(frequentFlyer.email);
    }
}
