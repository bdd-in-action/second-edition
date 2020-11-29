package com.examplcom.manning.bddinaction.frequentflyer.repositories;

import com.examplcom.manning.bddinaction.frequentflyer.domain.CabinClass;
import com.examplcom.manning.bddinaction.frequentflyer.domain.PointsSchedule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface PointsScheduleRepository extends CrudRepository<PointsSchedule, Integer> {
    @Query("SELECT schedule FROM PointsSchedule schedule WHERE schedule.departure=?1 and schedule.destinaton=?2 and schedule.cabinClass = ?3")
    Collection<PointsSchedule> findPointsSchedule(String departure, String destination, CabinClass cabinClass);
}
