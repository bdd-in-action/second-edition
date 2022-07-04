package com.manning.bddinaction.frequentflyer.acceptancetests.actions.search;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import net.serenitybdd.core.pages.PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchForm extends PageObject {

    @FindBy(id = "departure")
    WebElement departureField;

    @FindBy(id = "arrival")
    WebElement arrivalField;

    @FindBy(id = "travel-class")
    WebElement travelClassDropdown;

    @FindBy(id = "search-button")
    WebElement searchButton;

    static final By MISSING_FIELD_LABELS = By.cssSelector(".mat-form-field-invalid");

    private static final By SEARCH_SPINNER = By.cssSelector(".block-ui-spinner");

    public void submitSearch() {
        searchButton.click();
        waitForRenderedElementsToDisappear(SEARCH_SPINNER);
    }

    public SearchForm setDeparture(String departure) {
        departureField.sendKeys(departure);
        return this;
    }

    public SearchForm setDestination(String destination) {
        arrivalField.sendKeys(destination);
        return this;
    }

    private WebElement optionWithLabel(String label) {
        return $("//mat-option[normalize-space(.)='{0}']", label);
    }

    public SearchForm setTravelClass(TravelClass travelClass) {
        // Click on the dropdown field to open the list of values
        travelClassDropdown.click();
        if (travelClass != TravelClass.NOT_SPECIFIED) {
            optionWithLabel(travelClass.getLabel()).click();
        } else {
            // Click on ESCAPE to close the travel class dropdown
            travelClassDropdown.sendKeys(Keys.ESCAPE);
        }
        return this;
    }

    public boolean searchIsEnabled() {
        return searchButton.isEnabled();
    }
}
