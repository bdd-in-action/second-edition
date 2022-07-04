package com.examplcom.manning.bddinaction.frequentflyer.flights;

import java.util.ArrayList;
import java.util.List;

public class FlightDatabase {

    private static final FlightDatabase FLIGHT_DATABASE = new FlightDatabase();
    public static FlightDatabase instance() {
        return FLIGHT_DATABASE;
    }

    private List<Itinerary> itineraries = new ArrayList<>();

    public TripBuilder recordTripDistance() {
        return new TripBuilder();
    }

    public class TripBuilder {
        String departure;
        String destination;
        int distanceInKm;

        public TripBuilder from(String departure) {
            this.departure = departure;
            return this;
        }

        public TripBuilder to(String destination) {
            this.destination = destination;
            return this;
        }

        public TripBuilder as(int distanceInKm) {
            this.distanceInKm = distanceInKm;
            return this;
        }

        public void kilometres() {
            itineraries.add(new Itinerary(departure,destination,distanceInKm));
        }
    }
}
