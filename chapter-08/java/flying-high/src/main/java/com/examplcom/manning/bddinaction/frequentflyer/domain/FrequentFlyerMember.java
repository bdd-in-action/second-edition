package com.examplcom.manning.bddinaction.frequentflyer.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Set;

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

//    @OneToMany(cascade = {CascadeType.ALL},fetch= FetchType.EAGER, mappedBy = "member")
    @OneToMany(mappedBy = "member")
    private Collection<RecordedFlight> recordedFlights;

    public FrequentFlyerMember() {}

    private FrequentFlyerMember(String name, FrequentFlyerStatus status) {
        this.name = name;
        this.status = status;
    }

    public static FrequentFlyerMember newMember() {
        return new FrequentFlyerMember("A Frequent Flyer Member", FrequentFlyerStatus.Standard);
    }
    public static FrequentFlyerMember named(String name) {
        return new FrequentFlyerMember(name, FrequentFlyerStatus.Standard);
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

    public void setRecordedFlights(Collection<RecordedFlight> recordedFlights) {
        this.recordedFlights  =recordedFlights;
    }

    public Collection<RecordedFlight> getRecordedFlight() {
        return recordedFlights;
    }

    public void addRecordedFlight(RecordedFlight flight) {
        recordedFlights.add(flight);
        flight.setMember(this);
    }

    public void removeRecordedFlight(RecordedFlight flight) {
        recordedFlights.remove(flight);
    }
}
