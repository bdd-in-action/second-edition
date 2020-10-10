package com.examplcom.manning.bddinaction.frequentflyer.repositories;

import com.examplcom.manning.bddinaction.frequentflyer.domain.FrequentFlyerMember;
import com.examplcom.manning.bddinaction.frequentflyer.domain.PointsSchedule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface FrequentFlyerMemberRepository extends CrudRepository<FrequentFlyerMember, Integer> {
    FrequentFlyerMember findByName(String name);
}
