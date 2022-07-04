package com.manning.bddinaction.frequentflyer.acceptancetests.actions.navigation;

import net.serenitybdd.core.steps.UIInteractionSteps;
import net.thucydides.core.annotations.Step;

public class Navigate extends UIInteractionSteps {
    /**
     * The actual page URLs are configured in the serenity.conf file in the pages section.
     * This allows the pages to be easily changed for different environments
     */
    @Step("Open the application login page")
    public void toTheLoginPage() {
        openPageNamed("login");
    }

    @Step("Open the Book Flights page")
    public void toTheBookFlightsPage() {
        openPageNamed("book.flights");
    }

    @Step("Open the Book Flights page")
    public void toTheRegisitrationPage() {
        openPageNamed("registration");
    }

}
