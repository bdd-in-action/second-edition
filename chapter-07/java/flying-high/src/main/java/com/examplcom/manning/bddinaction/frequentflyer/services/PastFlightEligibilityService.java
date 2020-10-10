package com.examplcom.manning.bddinaction.frequentflyer.services;

import com.examplcom.manning.bddinaction.frequentflyer.domain.FrequentFlyerMember;
import com.examplcom.manning.bddinaction.frequentflyer.domain.PastFlight;

import java.util.List;

public interface PastFlightEligibilityService {
    List<PastFlight> flightsEligibleFor(FrequentFlyerMember member, List<PastFlight> submittedFlights);
}
