package com.manning.bddinaction.flyinghigh.ui.screenplay.domain;

import com.manning.bddinaction.flyinghigh.domain.persona.TravelClass;

public record FlightSearch(String from, String to, TravelClass travelClass, Boolean returnTrip) {}
