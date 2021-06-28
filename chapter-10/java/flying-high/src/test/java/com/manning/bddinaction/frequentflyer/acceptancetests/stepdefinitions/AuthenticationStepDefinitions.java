package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FrequentFlyer;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.LoginForm;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.assertj.core.api.Assertions.assertThat;

public class AuthenticationStepDefinitions {

    FrequentFlyer frequentFlyer;

    @Given("{} is a registered Frequency Flyer member")
    public void frequentFlyerMember(FrequentFlyer frequentFlyer) {
        this.frequentFlyer = frequentFlyer;
    }

    @When("he/she logs on with a valid username and password")
    public void logsOnWithAValidUsernameAndPassword() {
        WebDriver driver = WebTestSupport.currentDriver();
        LoginForm loginForm = new LoginForm(driver);
        loginForm.open();
        loginForm.signinWithCredentials(frequentFlyer.email, frequentFlyer.password);
    }

    @Then("he/she should be given access to his/her account")
    public void heShouldBeGivenAccessToHisAccount() {
        WebDriver driver = WebTestSupport.currentDriver();

        WebDriverWait wait = new WebDriverWait(driver, 3);
        String currentUserEmail =
                wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("current-user"))).getText();
        assertThat(currentUserEmail).isEqualTo(frequentFlyer.email);
    }
}
