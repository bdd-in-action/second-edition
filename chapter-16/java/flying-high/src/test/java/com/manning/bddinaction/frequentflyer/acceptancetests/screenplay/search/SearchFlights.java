package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.ux.SelectFromDropdown;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.SendKeys;
import net.serenitybdd.screenplay.conditions.Check;
import net.serenitybdd.screenplay.waits.WaitUntil;
import net.thucydides.core.annotations.Step;
import org.openqa.selenium.Keys;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.*;

public class SearchFlights implements ToDestination, InTravelClass, Performable {

    String departure;
    String destination;
    TravelClass travelClass;
    Boolean returnJourney = false;

    /**
     * This is where the action happens
     */
    @Override
    @Step("{0} looks for #travelClass flights between #departure and #destination")
    public <T extends Actor> void performAs(T traveller) {
        traveller.attemptsTo(
                Navigate.toBookFlights(),
                SendKeys.of(departure, Keys.TAB).into(SearchFlightsForm.FROM),
                SendKeys.of(destination, Keys.TAB).into(SearchFlightsForm.TO),
                SelectFromDropdown.locatedBy(SearchFlightsForm.TRAVEL_CLASS).selectingOption(travelClass.getLabel()),

                Check.whether(returnJourney).andIfSo(
                        SendKeys.of(dateInOneWeeksTime()).into(SearchFlightsForm.RETURN_DATE)
                ),

                Click.on(SearchFlightsForm.SEARCH_BUTTON),
                WaitUntil.the(SearchResultsList.SEARCH_RESULTS, isVisible()).forNoMoreThan(10).seconds()
        );
    }

    private String dateInOneWeeksTime() {
        return LocalDate.now().plusDays(7).format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
    }

    /**
     * We need this constructor for Serenity's instrumentation magic
     */
    public SearchFlights() {
    }

    protected SearchFlights(String departure) {
        this.departure = departure;
    }

    /**
     * From here on in, we have our builder methods to build the performable.
     */
    public static ToDestination from(String departure) {
        return new SearchFlights(departure);
    }

    @Override
    public InTravelClass to(String destination) {
        this.destination = destination;
        return this;
    }

    @Override
    public SearchFlights inTravelClass(TravelClass travelClass) {
        this.travelClass = travelClass;
        return this;
    }

    public SearchFlights withAReturnJourney() {
        this.returnJourney = true;
        return this;
    }

    public SearchFlights withAReturnJourney(Boolean returnJourney) {
        this.returnJourney = returnJourney;
        return this;
    }

}
