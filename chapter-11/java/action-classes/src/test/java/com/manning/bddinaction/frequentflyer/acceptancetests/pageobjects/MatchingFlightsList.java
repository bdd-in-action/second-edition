package com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.MatchingFlight;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import net.serenitybdd.core.pages.PageComponent;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.stream.Collectors;

public class MatchingFlightsList extends PageComponent {

    @FindBy(css = ".flight-container .card")
    private List<WebElement> matchingFlights;

    private final static By DEPARTURE = By.cssSelector(".departure");
    private final static By DESTINATION = By.cssSelector(".destination");
    private final static By TRAVEL_CLASS = By.cssSelector(".travel-class");

    public List<MatchingFlight> matchingFlights() {
        return matchingFlights.stream()
                .map(element -> new MatchingFlight(
                        element.findElement(DEPARTURE).getText(),
                        element.findElement(DESTINATION).getText(),
                        TravelClass.withLabel(element.findElement(TRAVEL_CLASS).getText())
                ))
                .collect(Collectors.toList());
    }
}
