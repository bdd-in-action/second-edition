package com.examplcom.manning.bddinaction.frequentflyer.repositories;

import com.examplcom.manning.bddinaction.frequentflyer.domain.FrequentFlyerStatus;
import com.examplcom.manning.bddinaction.frequentflyer.domain.PointsMultiplier;
import com.examplcom.manning.bddinaction.frequentflyer.domain.PointsSchedule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;
import java.util.Optional;

public interface PointsMultiplierRepository extends CrudRepository<PointsMultiplier, Integer> {
    Optional<PointsMultiplier> findByStatus(FrequentFlyerStatus status);
}
