package com.manning.bddinaction.frequentflyer.acceptancetests.actions.registration;

import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;

class RegistrationForm extends PageObject {
    static By EMAIL = By.id("email");
    static By PASSWORD = By.id("password");
    static By FIRSTNAME = By.id("firstName");
    static By LASTNAME = By.id("lastName");
    static By ADDRESS = By.id("address");
    static By COUNTRY = By.id("country");
    static By TITLE = By.id("title");
    static By TERMS = By.id("terms");
    static By REGISTER_BUTTON = By.xpath("//button[.='Register']");
    String TITLE_ENTRY = "//mat-option[.='{0}']/span";

    public void setEmail(String email) {
        $(EMAIL).type(email);
    }
    public void setPassword(String email) {
        $(PASSWORD).type(email);
    }

    public void setFirstname(String firstName) {
        $(FIRSTNAME).type(firstName);
    }

    public void setLastname(String lastName) {
        $(LASTNAME).type(lastName);
    }

    public void setCountry(String country) {
        $(COUNTRY).type(country);
    }

    public void setAddress(String address) {
        $(ADDRESS).type(address);
    }

    public void setTitle(String title) {
        $(TITLE).click();
        $(TITLE_ENTRY, title).click();
    }

    public void agreeToTermsAndConditions() {
        $(TERMS).click();
    }

    public void submit() {
        $(REGISTER_BUTTON).click();
    }
}
