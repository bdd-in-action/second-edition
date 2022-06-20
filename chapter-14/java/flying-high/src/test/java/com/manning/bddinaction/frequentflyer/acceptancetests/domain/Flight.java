package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;

public record Flight(String from, String to, TravelClass travelClass, String tripDate) {}
