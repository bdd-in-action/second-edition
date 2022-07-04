package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;

//public record FlightSearch(String from, String to, TravelClass travelClass, Boolean returnTrip) {}

public class FlightSearch {
    private final String from;
    private final String to;
    private final TravelClass travelClass;
    private final Boolean returnTrip;

    public FlightSearch(String from, String to, TravelClass travelClass, Boolean returnTrip) {
        this.from = from;
        this.to = to;
        this.travelClass = travelClass;
        this.returnTrip = returnTrip;
    }

    public String from() {
        return from;
    }

    public String to() {
        return to;
    }

    public TravelClass travelClass() {
        return travelClass;
    }

    public Boolean returnTrip() {
        return returnTrip;
    }
}