package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.domain.RegisteredFrequentFlyer;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.assertj.core.api.Assertions.assertThat;

public class AuthenticationStepDefinitions {

    RegisteredFrequentFlyer frequentFlyer;

    @Given("{} is a registered Frequency Flyer member")
    public void frequentFlyerMember(RegisteredFrequentFlyer frequentFlyer) {
        this.frequentFlyer = frequentFlyer;
    }

    @When("he/she logs on with a valid username and password")
    public void logsOnWithAValidUsernameAndPassword() {
        WebDriver driver = WebTestSupport.currentDriver();

        driver.get("http://localhost:3000");

        driver.findElement(By.linkText("Login")).click();
        driver.findElement(By.id("email")).sendKeys(frequentFlyer.email);
        driver.findElement(By.id("password")).sendKeys(frequentFlyer.password);
        driver.findElement(By.id("login-button")).click();
    }

    @Then("he/she should be given access to his/her account")
    public void heShouldBeGivenAccessToHisAccount() {
        WebDriver driver = WebTestSupport.currentDriver();

        String currentUserEmail = driver.findElement(By.id("current-user")).getText();
        assertThat(currentUserEmail).isEqualTo(frequentFlyer.email);
    }
}
