package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.City;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.Flight;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FlightBooking;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import net.thucydides.core.annotations.Steps;

import java.time.LocalDateTime;
import java.time.LocalTime;

/**
 * Place flight bookings
 * {
 *   "departure": {
 *     "name": "string",
 *     "point": 0,
 *     "short": "string",
 *     "region": "string"
 *   },
 *   "destination": {
 *     "name": "string",
 *     "point": 0,
 *     "short": "string",
 *     "region": "string"
 *   },
 *   "departureDate": "2021-05-08T11:43:26.853Z",
 *   "arrivalDate": "2021-05-08T11:43:26.853Z",
 *   "class": "Economy",
 *   "email": "string"
 * }
 */
public class FlightsAPI extends AuthenticatedAPI {

    @Steps
    CitiesAPI cities;

    public void bookFlight(Traveller traveller, Flight flight) {
        City departure = cities.findCityByName(flight.from());
        City destination = cities.findCityByName(flight.to());

        FlightBooking booking = new FlightBooking(departure, destination,
                                                  flight.tripDate(), flight.tripDate(),
                                                  flight.travelClass().getLabel(), traveller.email());

        withAuthentication().body(booking).post(endpointUrlFor("/flights"));
    }

}
