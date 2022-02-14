package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginForm {
    private static final By EMAIL_FIELD = By.id("email");
    private static final By PASSWORD_FIELD = By.id("password");
    private static final By LOGIN_BUTTON = By.id("login-button");

    private final WebDriver driver;

    public LoginForm(WebDriver driver) {
        this.driver = driver;
    }

    public void open() {
        driver.get("http://localhost:3000/login");
    }

    public void signinWithCredentials(String email, String password) {
        driver.findElement(EMAIL_FIELD).sendKeys(email);
        driver.findElement(PASSWORD_FIELD).sendKeys(password);
        driver.findElement(LOGIN_BUTTON).click();
    }
}
