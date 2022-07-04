package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

public record FlightSearch(String from, String to, TravelClass travelClass, Boolean returnTrip) {
    public String travelClassName() { return  travelClass.getLabel(); }
}
