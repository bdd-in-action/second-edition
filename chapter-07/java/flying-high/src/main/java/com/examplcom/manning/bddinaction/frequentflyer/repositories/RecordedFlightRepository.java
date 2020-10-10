package com.examplcom.manning.bddinaction.frequentflyer.repositories;

import com.examplcom.manning.bddinaction.frequentflyer.domain.FrequentFlyerMember;
import com.examplcom.manning.bddinaction.frequentflyer.domain.RecordedFlight;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface RecordedFlightRepository extends CrudRepository<RecordedFlight, Integer> {
    Collection<RecordedFlight> findByMember(FrequentFlyerMember member);
}
