package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions.usingpageobjects;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class WebTestSupport {

    private static ThreadLocal<WebDriver> THREAD_LOCAL_DRIVER = new ThreadLocal<>();

    @Before("@webtest")
    public void setupWebdriver() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized", "disable-extensions", "disable-popup-blocking", "disable-infobars");
        WebDriver driver = new ChromeDriver(options);
        THREAD_LOCAL_DRIVER.set(driver);
    }

    public static WebDriver currentDriver() {
        return THREAD_LOCAL_DRIVER.get();
    }

    @After("@webtest")
    public void closeWebdriver() {
        THREAD_LOCAL_DRIVER.get().quit();
    }
}
