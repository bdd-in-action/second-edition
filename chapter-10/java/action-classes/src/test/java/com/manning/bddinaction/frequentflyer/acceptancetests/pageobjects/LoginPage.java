package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import org.openqa.selenium.support.FindBy;

@DefaultUrl("/login")
public class LoginPage extends PageObject {

    @FindBy(id="email")
    WebElementFacade email;

    @FindBy(id="password")
    WebElementFacade password;

    @FindBy(id="login-button")
    WebElementFacade loginButton;

    public void signinWithCredentials(String emailValue, String passwordValue) {
        email.type(emailValue);
        password.type(passwordValue);
        loginButton.click();
    }
}
