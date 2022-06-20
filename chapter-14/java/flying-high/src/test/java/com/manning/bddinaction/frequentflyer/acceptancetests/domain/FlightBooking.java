package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public record FlightBooking (
        @JsonProperty("departure")  City departure,
        @JsonProperty("destination") City destination,
        @JsonProperty("departureDate") String departureDate,
        @JsonProperty("arrivalDate") String arrivalDate,
        @JsonProperty("class") String travelClass,
        @JsonProperty("email") String email) {
}
