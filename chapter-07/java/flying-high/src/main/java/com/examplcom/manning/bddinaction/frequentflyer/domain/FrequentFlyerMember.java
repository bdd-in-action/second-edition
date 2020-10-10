package com.examplcom.manning.bddinaction.frequentflyer.domain;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class FrequentFlyerMember {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="member_id")
    private int id;
    private String name;
    private LocalDate joinDate;
    private int initialPoints;

    @Enumerated(EnumType.ORDINAL)
    private FrequentFlyerStatus status;

    public FrequentFlyerMember() {}

    private FrequentFlyerMember(String name, FrequentFlyerStatus status) {
        this.name = name;
        this.status = status;
    }

    public static FrequentFlyerMember newMember() {
        return new FrequentFlyerMember("A Frequent Flyer Member", FrequentFlyerStatus.Standard);
    }
    public FrequentFlyerMember named(String name) {
        return new FrequentFlyerMember(name, this.status);
    }

    public FrequentFlyerMember withStatus(FrequentFlyerStatus status) {
        return new FrequentFlyerMember(this.name, status);
    }

    public LocalDate getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(LocalDate joinDate) {
        this.joinDate = joinDate;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public FrequentFlyerStatus getStatus() {
        return status;
    }

    public int getInitialPoints() {
        return initialPoints;
    }

    public void setInitialPoints(int initialPoints) {
        this.initialPoints = initialPoints;
    }
}
