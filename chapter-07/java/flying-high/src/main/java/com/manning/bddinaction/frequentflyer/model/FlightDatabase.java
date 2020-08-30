package com.manning.bddinaction.frequentflyer.model;

import java.util.ArrayList;
import java.util.List;

public class FlightDatabase {
    private static ThreadLocal<FlightDatabase> theFlightDatabase = ThreadLocal.withInitial(() -> new FlightDatabase());

    public static FlightDatabase instance() {
        return theFlightDatabase.get();
    }

    private List<FlightPlan> flightPlans = new ArrayList<>();

    public void saveFlightPlan(FlightPlan flightPlan) {
        flightPlans.add(flightPlan);
    }

    public TripDistanceRecorder recordTripDistance() {
        return new TripDistanceRecorder(this);
    }

    public static class TripDistanceRecorder {
        private FlightDatabase flightDatabase;
        private String departure;
        private String destination;
        private int distance;

        public TripDistanceRecorder(FlightDatabase flightDatabase) {
            this.flightDatabase = flightDatabase;
        }

        public TripDistanceRecorder from(String departure) {
            this.departure = departure;
            return this;
        }

        public TripDistanceRecorder to(String destination) {
            this.destination = destination;
            return this;
        }

        public TripDistanceRecorder as(int distance) {
            this.distance = distance;
            return this;
        }

        public void kilometres() {
            flightDatabase.saveFlightPlan(new FlightPlan(departure,destination,distance));
        }
    }
}
