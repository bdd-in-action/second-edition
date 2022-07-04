package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class RegistrationForm {

    @FindBy(id="email")
    WebElement email;

    @FindBy(id="password")
    WebElement password;

    @FindBy(id="firstName")
    WebElement firstName;

    @FindBy(id="lastName")
    WebElement lastName;

    @FindBy(id="address")
    WebElement address;

    @FindBy(id="country")
    WebElement country;

    @FindBy(id="title")
    WebElement title;

    @FindBy(id="terms")
    WebElement termsAndConditions;

    @FindBy(xpath="//button[.='Register']")
    WebElement registerButton;

    private By titleEntry(String label) {
        return By.xpath("//mat-option[.='" + label + "']/span");
    }

    @FindBy(css = "mat-error")
    List<WebElement> errorMessages;
    private WebDriver driver;

    public RegistrationForm(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void registerAs(Traveller newTraveller) {
        email.sendKeys(newTraveller.getEmail());
        password.sendKeys(newTraveller.getPassword());
        firstName.sendKeys(newTraveller.getFirstName());
        lastName.sendKeys(newTraveller.getLastName());

        title.click();
        driver.findElement(titleEntry(newTraveller.getTitle())).click();

        address.sendKeys(newTraveller.getAddress());
        country.sendKeys(newTraveller.getCountry());
    }
}
