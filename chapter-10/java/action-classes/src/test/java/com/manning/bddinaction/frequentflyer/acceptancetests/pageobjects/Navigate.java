package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import org.openqa.selenium.WebDriver;

public class Navigate {
    private WebDriver driver;

    public Navigate(WebDriver driver) {
        this.driver = driver;
    }

    public void toTheLoginPage() {
        driver.get("http://localhost:3000/login");
    }

}
