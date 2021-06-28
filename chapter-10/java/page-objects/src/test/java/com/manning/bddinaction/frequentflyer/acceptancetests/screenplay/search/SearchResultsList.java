package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search;

import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;

public class SearchResultsList {

    public static final Target SEARCH_RESULTS = Target.the("Search results").locatedBy(".flight-container");
    public static final Target BOOK_FLIGHT_BUTTONS = Target.the("From field")
                                                           .located(By.cssSelector("[data-testid='book-flight']"));
}