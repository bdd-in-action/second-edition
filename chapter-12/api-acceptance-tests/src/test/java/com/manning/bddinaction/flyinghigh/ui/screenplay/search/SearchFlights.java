package com.manning.bddinaction.flyinghigh.ui.screenplay.search;

import com.manning.bddinaction.flyinghigh.ui.screenplay.domain.FlightSearch;
import com.manning.bddinaction.flyinghigh.ui.screenplay.navigation.Navigate;
import com.manning.bddinaction.flyinghigh.ui.screenplay.ux.SelectDropdown;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.SendKeys;
import net.serenitybdd.screenplay.actions.type.Type;
import net.serenitybdd.screenplay.conditions.Check;
import net.serenitybdd.screenplay.waits.WaitUntil;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isVisible;

public class SearchFlights {
    public static Performable matching(FlightSearch searchCriteria) {
        return Task.where("Search for flights matching " + searchCriteria,
                Navigate.toBookFlights(),

                Type.theValue(searchCriteria.from()).into(SearchFlightsForm.FROM),
                Type.theValue(searchCriteria.to()).into(SearchFlightsForm.TO),

                SelectDropdown.option(searchCriteria.travelClass().name())
                              .from(SearchFlightsForm.TRAVEL_CLASS_DROPDOWN),

                Check.whether(searchCriteria.returnTrip()).andIfSo(
                        SendKeys.of(dateInOneWeeksTime()).into(SearchFlightsForm.RETURN_DATE)
                ),

                Click.on(SearchFlightsForm.SEARCH_BUTTON),
                WaitUntil.the(SearchResultsList.SEARCH_RESULTS, isVisible()).forNoMoreThan(5).seconds()
        );
    }

    private static String dateInOneWeeksTime() {
        return LocalDate.now().plusDays(7).format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
    }
}
