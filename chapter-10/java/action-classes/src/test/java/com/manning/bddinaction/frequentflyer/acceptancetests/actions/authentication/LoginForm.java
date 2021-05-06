package com.manning.bddinaction.frequentflyer.acceptancetests.actions.authentication;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.DefaultUrl;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;

@DefaultUrl("/login")
class LoginForm extends PageObject {
    static final By EMAIL = By.id("email");
    static final By PASSWORD = By.id("password");
    static final By LOGIN_BUTTON = By.id("login-button");

    @FindBy(id="email")
    WebElement email;

    @FindBy(id="password")
    WebElement password;

    @FindBy(id="login-button")
    WebElement loginButton;

    public void enterCredentials(String emailValue, String passwordValue) {
        email.sendKeys(emailValue);
        password.sendKeys(passwordValue);
    }

    public void submit() {
        loginButton.click();
    }
}
