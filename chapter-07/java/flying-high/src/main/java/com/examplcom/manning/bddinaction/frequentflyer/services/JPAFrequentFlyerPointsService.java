package com.examplcom.manning.bddinaction.frequentflyer.services;

import com.examplcom.manning.bddinaction.frequentflyer.domain.*;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.FrequentFlyerMemberRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.PointsMultiplierRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.PointsScheduleRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.RecordedFlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;

@Service
public class JPAFrequentFlyerPointsService implements FrequentFlyerPointsService {

    @Autowired
    FrequentFlyerMemberRepository frequentFlyers;

    @Autowired
    PointsMultiplierRepository pointsMultiplierRepository;

    @Autowired
    PointsScheduleRepository pointsScheduleRepository;

    @Autowired
    RecordedFlightRepository recordedFlightRepository;

    @Override
    public void recordFlight(FrequentFlyerMember member, String departure, String destination, CabinClass cabinClass) {

        pointScheduleBetween(departure, destination, cabinClass).ifPresent(
                schedule -> recordedFlightRepository.save(
                        new RecordedFlight(
                                LocalDate.now(),
                                member,
                                departure,
                                destination,
                                cabinClass,
                                false,
                                Period.ZERO,
                                (int) (schedule.getPoints() * multiplierFor(member) * loyaltyBonusFor(member)))
                )
        );
    }

    @Override
    public void creditPastFlight(FrequentFlyerMember frequentFlyerMember, PastFlight pastFlight) {

    }

    private double loyaltyBonusFor(FrequentFlyerMember member) {
        return (member.getInitialPoints() >= 10000) ? 1.5 : 1;
    }

    private Optional<PointsSchedule> pointScheduleBetween(String departure, String destination, CabinClass cabinClass) {
        Optional<PointsSchedule> scheduleFromDepartureToDestination
                = pointsScheduleRepository.findPointsSchedule(departure, destination, cabinClass)
                .stream()
                .findFirst();

        if (scheduleFromDepartureToDestination.isPresent()) {
            return scheduleFromDepartureToDestination;
        } else {
            return pointsScheduleRepository.findPointsSchedule(destination, departure, cabinClass)
                    .stream()
                    .findFirst();
        }
    }

    @Override
    public int pointsEarnedBy(FrequentFlyerMember member) {
        return recordedFlightRepository.findByMember(member)
                .stream()
                .mapToInt(RecordedFlight::getPointsEarned)
                .sum();
    }

    private double multiplierFor(com.examplcom.manning.bddinaction.frequentflyer.domain.FrequentFlyerMember member) {
        return pointsMultiplierRepository.findByStatus(member.getStatus())
                .orElse(PointsMultiplier.STANDARD_MULTIPLIER)
                .getMultiplier();
    }
}
