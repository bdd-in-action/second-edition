package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FrequentFlyer;
import org.assertj.core.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static org.assertj.core.api.Assertions.assertThat;

public class CurrentUserPanel {

    private WebDriver driver;

    public CurrentUserPanel(WebDriver driver) { this.driver = driver; }

    private static final By CURENT_USER = By.id("current-user");

    public String label() {
        return driver.findElement(CURENT_USER).getText();
    }

    public void checkThatUserEmailDisplayedIs(String expectedEmail) {
        assertThat(driver.findElement(CURENT_USER).getText()).isEqualTo(expectedEmail);
    }
}
