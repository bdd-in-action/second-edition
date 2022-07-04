package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CurrentUserPanel {

    private WebDriver driver;

    public CurrentUserPanel(WebDriver driver) { this.driver = driver; }

    private static final By CURRENT_USER = By.id("current-user");

    public String email() {
        return driver.findElement(CURRENT_USER).getText();
    }
}
