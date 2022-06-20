package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.City;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.CompletedFlight;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.Flight;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FlightBooking;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import net.thucydides.core.annotations.Steps;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


public class BookingsAPI extends AuthenticatedAPI {

    public List<CompletedFlight> flightsOfTraveller(Traveller traveller) {
        return withAuthentication()
                .with().queryParam("email", traveller.email())
                .get(endpointUrlFor("/bookings"))
                .jsonPath()
                .getList(".", Map.class)
                .stream().map(
                        flight -> {
                            String departureCity = (String) ((Map) flight.get("departure")).get("name");
                            String destinationCity = (String) ((Map) flight.get("destination")).get("name");
                            Integer points = (Integer) flight.get("points");
                            return new CompletedFlight(departureCity, destinationCity, points);
                        }
                ).collect(Collectors.toList());
    }
}
