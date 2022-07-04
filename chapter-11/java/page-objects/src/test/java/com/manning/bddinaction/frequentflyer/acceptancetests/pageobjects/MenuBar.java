package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MenuBar {
    private static final By BOOK_FLIGHTS_BUTTON = By.xpath("//button[contains(.,'Book Flights')]");
    private static final By MY_BOOKINGS_BUTTON = By.xpath("//button[contains(.,'My Bookings')]");
    private static final By MY_ACCOUNT_BUTTON = By.xpath("//button[contains(.,'My Account')]");
    private static final By LOGOUT_BUTTON = By.xpath("//button[contains(.,'Logout')]");

    private WebDriver driver;

    public MenuBar(WebDriver driver) { this.driver = driver; }

    public void navigateToBookFlights() {
        driver.findElement(BOOK_FLIGHTS_BUTTON).click();
    }

    public void navigateToMyBookings() {
        driver.findElement(MY_BOOKINGS_BUTTON).click();
    }

    public void navigateToMyAccount() {
        driver.findElement(MY_ACCOUNT_BUTTON).click();
    }

    public void logout() {
        driver.findElement(LOGOUT_BUTTON).click();
    }

}
