package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.bookings;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.Flight;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api.FlightsAPI;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.facts.Fact;
import net.thucydides.core.annotations.Steps;

public class BookedAFlight implements Performable {

    private Flight flight;

    public BookedAFlight() {}

    public BookedAFlight(Flight flight) {
        this.flight = flight;
    }

    public static BookedAFlight withFlightDetails(Flight flight) {
        return new BookedAFlight(flight);
    }

    @Steps
    FlightsAPI flightsAPI;

    @Override
    public <T extends Actor> void performAs(T actor) {
        Traveller traveller = actor.recall("CURRENT_USER");
        flightsAPI.bookFlight(traveller, flight);
    }
}
