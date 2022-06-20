package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search.BookTheFlight;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search.SearchFlights;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.ux.Acknowledge;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;

public class BookingAFlightStepDefinitions {

    @ParameterType("Economy|Premium Economy|Business")
    public TravelClass travelClass(String travelClassName) {
        return TravelClass.withLabel(travelClassName);
    }

    @ParameterType("single|return")
    public Boolean returnTrip(String tripType) {
        return tripType.equalsIgnoreCase("return");
    }


    @When("{actor} books a/an {travelClass} flight from {} to {}")
    public void bookASingleFlight(Actor actor, TravelClass travelClass, String departure, String destination) {
        actor.attemptsTo(
                SearchFlights.from(departure).to(destination).inTravelClass(travelClass),
                BookTheFlight.thatIsFirstInTheList()
        );
    }

    @When("{actor} books a {returnTrip} {travelClass} flight from {} to {}")
    public void bookAReturnFlight(Actor actor, Boolean returnJourney, TravelClass travelClass, String departure, String destination) {
        actor.attemptsTo(
                SearchFlights.from(departure).to(destination).inTravelClass(travelClass).withAReturnJourney(returnJourney),
                BookTheFlight.thatIsFirstInTheList()
        );
    }

}
