package com.examplcom.manning.bddinaction.frequentflyer.services;

import com.examplcom.manning.bddinaction.frequentflyer.domain.CabinClass;
import com.examplcom.manning.bddinaction.frequentflyer.domain.FrequentFlyerMember;
import com.examplcom.manning.bddinaction.frequentflyer.domain.PastFlight;

public interface FrequentFlyerPointsService {
    void recordFlight(FrequentFlyerMember frequentFlyerMember,
                      String departure,
                      String destination,
                      CabinClass cabinClass);

    void creditPastFlight(FrequentFlyerMember frequentFlyerMember, PastFlight pastFlight);

    int pointsEarnedBy(FrequentFlyerMember frequentFlyerMember);
}
