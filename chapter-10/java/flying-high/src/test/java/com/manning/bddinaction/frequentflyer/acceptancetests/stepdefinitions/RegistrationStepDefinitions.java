package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersonas;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.matchers.WebElementStateMatchers;
import org.assertj.core.api.SoftAssertions;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;
import static org.openqa.selenium.support.ui.ExpectedConditions.textToBePresentInElementLocated;
import static org.openqa.selenium.support.ui.ExpectedConditions.visibilityOfElementLocated;

public class RegistrationStepDefinitions {

    Traveller newMember;

    @Given("{} does not have a Frequent Flyer account")
    public void notAFrequentFlyerMember(String name) {
        newMember = TravellerPersonas.findByName(name);
    }

    @When("he/she registers as a Frequent Flyer member")
    public void heRegistersAsAFrequentFlyerMember() {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/register");

        driver.findElement(By.id("email")).sendKeys(newMember.getEmail());
        driver.findElement(By.id("password")).sendKeys(newMember.getPassword());
        driver.findElement(By.id("firstName")).sendKeys(newMember.getFirstName());
        driver.findElement(By.id("lastName")).sendKeys(newMember.getLastName());
        driver.findElement(By.id("address")).sendKeys(newMember.getAddress());
        driver.findElement(By.id("country")).sendKeys(newMember.getCountry(), Keys.TAB);

        driver.findElement(By.id("title")).click();

        String titleOption = String.format("mat-option[value='%s']", newMember.getTitle());
        driver.findElement(By.cssSelector(titleOption)).click();

        String seatPreferenceRadioButton = String.format("//label[.='%s']", newMember.getSeatPreference());
        driver.findElement(By.xpath(seatPreferenceRadioButton)).click();

        driver.findElement(By.id("terms")).click();

        driver.findElement(By.xpath("//button[.='Register']")).click();
    }

    @Then("{} should be able to log on to the Frequent Flyer application")
    public void shouldBeAbleToLoginAs(String name) {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/login");

        // Login to the Frequent Flyer app
        driver.findElement(By.id("email")).sendKeys(newMember.getEmail());
        driver.findElement(By.id("password")).sendKeys(newMember.getPassword());
        driver.findElement(By.id("login-button")).click();

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        String successMessage = wait.until(
                                  visibilityOfElementLocated(By.cssSelector(".toast-success"))
                                ).getText();

        assertThat(successMessage).isEqualTo("Logged in as " + newMember.getEmail());
    }

    @Then("he/she should have a Frequent Flyer account with:")
    public void aNewFrequentFlyerMemberAccountShouldBeCreatedWith(Map<String, String> expectedStatus) {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/users");

        waitUntilErrorMessagesHaveAppeared(driver, "[test-dataid='point-balance']");

        String points = driver.findElement(By.cssSelector("[test-dataid='point-balance']")).getText();
        String status = driver.findElement(By.cssSelector("[test-dataid='status-level']")).getText();

        assertThat(points).isEqualTo(expectedStatus.get("Points"));
        assertThat(status).isEqualTo(expectedStatus.get("Status Level"));

    }

    @When("he/she wants to register a new Frequent Flyer account")
    public void triesToRegisterANewAccount() {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/register");
    }

    @When("the following emails should not be considered valid:")
    public void invalidEmails(List<Map<String, String>> invalidEmails) {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/register");

        final SoftAssertions softly = new SoftAssertions();
        invalidEmails.forEach(
                emailValue -> {
                    String email = emailValue.get("Email");
                    driver.findElement(By.id("email")).clear();
                    if (email != null) {
                        driver.findElement(By.id("email")).sendKeys(email);
                    }
                    driver.findElement(By.xpath("//button[.='Register']")).click();
                    softly.assertThat(displayedErrorMessages())
                            .withFailMessage("Expected error message for email value " + email)
                            .contains("Not a valid email format");
                }
        );
        softly.assertAll();
    }

    @Then("the following information should be mandatory to register:")
    public void mandatoryFields(DataTable mandatoryFields) {
        final SoftAssertions softly = new SoftAssertions();
        mandatoryFields.entries().forEach(
                entry -> {
                    WebTestSupport.currentDriver().navigate().refresh();
                    registerAs(newMember.withNoValueFor(entry.get("Field")));
                    softly.assertThat(displayedErrorMessages()).containsExactly(entry.get("Error Message If Missing"));
                }
        );
        softly.assertAll();
    }

    private void registerAs(Traveller newMember) {
        WebDriver driver = WebTestSupport.currentDriver();

        driver.findElement(By.id("email")).sendKeys(newMember.getEmail());
        driver.findElement(By.id("password")).sendKeys(newMember.getPassword());
        driver.findElement(By.id("firstName")).sendKeys(newMember.getFirstName());
        driver.findElement(By.id("lastName")).sendKeys(newMember.getLastName());
        driver.findElement(By.id("address")).sendKeys(newMember.getAddress());
        driver.findElement(By.id("country")).sendKeys(newMember.getCountry(), Keys.TAB);

        driver.findElement(By.id("title")).click();

        String titleOption = String.format("mat-option[value='%s']", newMember.getTitle());
        driver.findElement(By.cssSelector(titleOption)).click();

        String seatPreferenceRadioButton = String.format("//label[.='%s']", newMember.getSeatPreference());
        driver.findElement(By.xpath(seatPreferenceRadioButton)).click();

        if (newMember.agreesToTerms()) {
            driver.findElement(By.id("terms")).click();
        }

        driver.findElement(By.xpath("//button[.='Register']")).click();
    }

    private List<String> displayedErrorMessages() {
        WebDriver driver = WebTestSupport.currentDriver();
        waitUntilErrorMessagesHaveAppeared(driver, "mat-error");
        return driver.findElements(By.cssSelector("mat-error"))
                .stream()
                .map(WebElement::getText)
                .collect(Collectors.toList());
    }

    private void waitUntilErrorMessagesHaveAppeared(WebDriver driver, String cssSelector) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
        wait.until(webDriver -> !webDriver.findElement(By.cssSelector(cssSelector)).getText().isEmpty());
    }

    @When("he/she tries to register with an email of {string}")
    public void triesToRegisterWithAUsernameOf(String email) {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/register");
        driver.findElement(By.id("email")).sendKeys(email);
        driver.findElement(By.xpath("//button[.='Register']")).click();
    }

    @Then("she should be told {string}")
    public void shouldBeTold(String errorMessage) {
        WebDriver driver = WebTestSupport.currentDriver();
        waitUntilErrorMessagesHaveAppeared(driver, "mat-error");

        List<String> errorMessages = driver.findElements(By.cssSelector("mat-error"))
                .stream()
                .map(WebElement::getText)
                .collect(Collectors.toList());

        assertThat(errorMessages).contains(errorMessage);
    }

    @When("he/she tries to register without approving the terms and conditions")
    public void triesToRegisterWithoutApprovingTheTermsAndConditions() {
        WebDriver driver = WebTestSupport.currentDriver();
        driver.get("http://localhost:3000/register");
        registerAs(newMember.withNoValueFor("agreesToTerms"));
    }

}
