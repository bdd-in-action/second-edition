package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.TravelClass;

public record SearchResult(String departure,
                           String destination,
                           String departureTime,
                           String arrivalTime,
                           TravelClass travelClass) {
}
