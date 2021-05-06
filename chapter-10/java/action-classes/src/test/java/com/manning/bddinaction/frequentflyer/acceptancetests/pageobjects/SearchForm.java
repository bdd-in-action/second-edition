package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;
import java.util.stream.Collectors;


public class SearchForm extends PageObject {

    @FindBy(id = "departure")
    WebElement departureField;

    @FindBy(id = "arrival")
    WebElement arrivalField;

    @FindBy(id = "travel-class")
    WebElement travelClassDropdown;

    @FindBy(id = "search-button")
    WebElement searchButton;

    private static final By SEARCH_BUTTON = By.id("search-button");
    private static final By SEARCH_SPINNER = By.cssSelector(".block-ui-spinner");

    public void submitSearch() {
        searchButton.click();
        waitFor(ExpectedConditions.invisibilityOfElementLocated(SEARCH_SPINNER));
    }

    private WebElement travelClassOf(String label) {
        return $("//mat-option[normalize-space(.)='{0}']", label);
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
    List<WebElementFacade> missingFieldLabels;

    public List<String> missingFields() {
        return missingFieldLabels.stream()
                .map(label -> label.getText().trim().replace(" *", ""))
                .collect(Collectors.toList());
    }


}
