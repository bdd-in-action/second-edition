package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;

public record FlightSearch(String from, String to, TravelClass travelClass, Boolean returnTrip) {}
