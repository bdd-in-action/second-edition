package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;

public class BookTheFlight {
    public static Performable thatIsFirstInTheList() {
        return Task.where("{0} books the first available flight",
                Click.on(SearchResultsList.BOOK_FLIGHT_BUTTONS)
                );
    }
}
