package com.examplcom.manning.bddinaction.frequentflyer.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
public class RecordedFlight {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="flight_id")
    private int id;

    @ManyToOne(optional=false,fetch=FetchType.LAZY)
    private FrequentFlyerMember member;

    private LocalDate date;
    private String departure;
    private String destinaton;
    @Enumerated(EnumType.ORDINAL)
    private CabinClass cabinClass;
    private Boolean isDelayed;
    private Period delay;
    private int pointsEarned;

    public RecordedFlight() {
    }

    public RecordedFlight(LocalDate date,
                          FrequentFlyerMember member,
                          String departure,
                          String destinaton,
                          CabinClass cabinClass,
                          Boolean isDelayed,
                          Period delay,
                          int pointsEarned) {
        this.date = date;
        this.member = member;
        this.departure = departure;
        this.destinaton = destinaton;
        this.cabinClass = cabinClass;
        this.isDelayed = isDelayed;
        this.delay = delay;
        this.pointsEarned = pointsEarned;
    }

    public FrequentFlyerMember getMember() {
        return member;
    }

    public LocalDate getDate() {
        return date;
    }

    public String getDeparture() {
        return departure;
    }

    public String getDestinaton() {
        return destinaton;
    }

    public CabinClass getCabinClass() {
        return cabinClass;
    }

    public int getPointsEarned() {
        return pointsEarned;
    }

    public Boolean getDelayed() {
        return isDelayed;
    }

    public Period getDelay() {
        return delay;
    }

    public void setMember(FrequentFlyerMember member) {
        this.member = member;
    }
}
