package com.manning.bddinaction.frequentflyer.model;

public class FlightPlan {
    private final String departure;
    private final String destination;
    private final int distanceInKm;

    public FlightPlan(String departure, String destination, int distanceInKm) {
        this.departure = departure;
        this.destination = destination;
        this.distanceInKm = distanceInKm;
    }

    public String getDeparture() {
        return departure;
    }

    public String getDestination() {
        return destination;
    }

    public int getDistanceInKm() {
        return distanceInKm;
    }
}
