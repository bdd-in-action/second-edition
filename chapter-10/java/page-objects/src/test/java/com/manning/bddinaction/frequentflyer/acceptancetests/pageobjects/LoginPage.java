package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    WebElement email;
    WebElement password;
    @FindBy(id="login-button")
    WebElement loginButton;

    @FindBy(id="register-button")
    WebElement registerButton;

    private WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public LoginPage open() {
        driver.get("http://bdd-flyer.herokuapp.com/login");
        return this;
    }

    public void navigateToRegistration() {
        registerButton.click();
    }

    public void signinWithCredentials(String emailValue, String passwordValue) {
        email.sendKeys(emailValue);
        password.sendKeys(passwordValue);
        loginButton.click();
    }
}
