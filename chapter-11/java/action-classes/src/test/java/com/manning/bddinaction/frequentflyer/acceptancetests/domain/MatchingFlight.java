package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;

public record MatchingFlight(String departure, String destination, TravelClass travelClass) {}
