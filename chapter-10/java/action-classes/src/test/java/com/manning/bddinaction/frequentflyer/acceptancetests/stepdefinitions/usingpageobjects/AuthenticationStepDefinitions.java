package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions.usingpageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.actions.authentication.CurrentUser;
import com.manning.bddinaction.frequentflyer.acceptancetests.actions.authentication.Login;
import com.manning.bddinaction.frequentflyer.acceptancetests.actions.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FrequentFlyer;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;

import static org.junit.Assert.assertTrue;

public class AuthenticationStepDefinitions {

    FrequentFlyer frequentFlyer;

    @Given("{} is a registered Frequency Flyer member")
    public void frequentFlyerMember(FrequentFlyer frequentFlyer) {
        this.frequentFlyer = frequentFlyer;
    }

    @Steps
    CurrentUser currentUser;

    @Steps
    Login login;

    @When("^s?he (?:logs|has logged) on with a valid username and password$")
    public void logsOnWithAValidUsernameAndPassword() {
        login.as(frequentFlyer);
    }

    @Then("he/she should be given access to his/her account")
    public void shouldBeGivenAccessToHisAccount() {
        assertTrue("the current user should be shown as " + frequentFlyer,
                currentUser.isConnectedAs(frequentFlyer));
    }
}
