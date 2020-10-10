package com.examplcom.manning.bddinaction.frequentflyer.services;

import com.examplcom.manning.bddinaction.frequentflyer.domain.*;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.FrequentFlyerMemberRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.PointsMultiplierRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.PointsScheduleRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.RecordedFlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JPAPastFlightEligibilityService implements PastFlightEligibilityService {

    @Autowired
    FrequentFlyerMemberRepository frequentFlyers;

    @Autowired
    PointsMultiplierRepository pointsMultiplierRepository;

    @Autowired
    PointsScheduleRepository pointsScheduleRepository;

    @Autowired
    RecordedFlightRepository recordedFlightRepository;

    @Override
    public List<PastFlight> flightsEligibleFor(FrequentFlyerMember member, List<PastFlight> submittedFlights) {
        return submittedFlights.stream()
                .filter(flight -> isEligibleFlightFor(member, flight))
                .collect(Collectors.toList());
    }

    private boolean isEligibleFlightFor(FrequentFlyerMember member, PastFlight flight) {
        if (flight.getStatus() != FlightStatus.COMPLETED) { return false; }
        return ChronoUnit.DAYS.between(flight.getScheduledDate(),member.getJoinDate()) <= 90;
    }
}
