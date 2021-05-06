package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MenuBar {

    private WebDriver driver;

    public MenuBar(WebDriver driver) { this.driver = driver; }

    private static final String BUTTON = "//button[contains(.,'%s')]";
    private static By buttonWithLabel(String label) { return By.xpath(String.format(BUTTON, label));}

    public void navigateToBookFlights() {
        driver.findElement(buttonWithLabel("Book Flights")).click();
    }

    public void navigateToMyBookings() {
        driver.findElement(buttonWithLabel("My Bookings")).click();
    }

    public void navigateToMyAccount() {
        driver.findElement(buttonWithLabel("My Account")).click();
    }

    public void logout() {
        driver.findElement(buttonWithLabel("Logout")).click();
    }

    public void login() {
        driver.findElement(buttonWithLabel("Login")).click();
    }

    public void naviateToRegistration() {
        driver.findElement(buttonWithLabel("Register")).click();
    }

}
