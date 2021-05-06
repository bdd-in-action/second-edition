package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import java.time.Duration;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import static org.openqa.selenium.support.ui.ExpectedConditions.invisibilityOfElementLocated;

public class SearchForm {

    @FindBy(id = "departure")
    WebElement departureField;

    @FindBy(id = "arrival")
    WebElement arrivalField;

    @FindBy(id = "travel-class")
    WebElement travelClassDropdown;

    @FindBy(id = "search-button")
    WebElement searchButton;

    private WebDriver driver;

    private static final By SEARCH_BUTTON = By.id("search-button");
    private static final By SEARCH_SPINNER = By.cssSelector(".block-ui-spinner");

    public void submitSearch() {
        driver.findElement(SEARCH_BUTTON).click();
        Wait<WebDriver> wait = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(10))
                .pollingEvery(Duration.ofMillis(100));
        wait.until(invisibilityOfElementLocated(SEARCH_SPINNER));
    }

    public SearchForm(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    private WebElement travelClassOf(String label) {
        return driver.findElement(By.xpath("//mat-option[normalize-space(.)='" + label + "']"));
    }

    public SearchForm enterSearchCriteria(String departure, String destination, TravelClass travelClass) {
        departureField.sendKeys(departure);
        arrivalField.sendKeys(destination);
        // Open the Travel Class dropdown
        travelClassDropdown.click();
        if (travelClass != TravelClass.NOT_SPECIFIED) {
            travelClassOf(travelClass.getLabel()).click();
        } else {
            // Click on ESCAPE to close the travel class dropdown
            travelClassDropdown.sendKeys(Keys.ESCAPE);
        }
        return this;
    }

    public boolean searchIsEnabled() {
        return searchButton.isEnabled();
    }

    @FindBy(css = ".mat-form-field-invalid")
    List<WebElement> missingFieldLabels;

    public List<String> missingFields() {
        return missingFieldLabels.stream()
                .map(label -> label.getText().trim().replace(" *", ""))
                .collect(Collectors.toList());
    }


}
