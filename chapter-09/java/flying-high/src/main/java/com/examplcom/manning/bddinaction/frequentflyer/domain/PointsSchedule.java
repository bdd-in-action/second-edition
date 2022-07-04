package com.examplcom.manning.bddinaction.frequentflyer.domain;

import javax.persistence.*;

@Entity
public class PointsSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String departure;
    private String destinaton;

    @Enumerated(EnumType.ORDINAL)
    private CabinClass cabinClass;
    private int points;

    public PointsSchedule(String departure, String destinaton, CabinClass cabinClass, int points) {
        this.departure = departure;
        this.destinaton = destinaton;
        this.cabinClass = cabinClass;
        this.points = points;
    }

    public PointsSchedule() {}

    public int getId() {
        return id;
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

    public int getPoints() {
        return points;
    }

    public static PointsScheduleBuilder from(String departure) {
        return new PointsScheduleBuilder(departure);
    }

    public static class PointsScheduleBuilder {
        private String departure;
        private String destinaton;
        private CabinClass cabinClass;

        public PointsScheduleBuilder(String departure) {
            this.departure = departure;
        }

        public PointsScheduleBuilder to(String destinaton) {
            this.destinaton = destinaton;
            return this;
        }

        public PointsScheduleBuilder in(String destinaton) {
            this.destinaton = destinaton;
            return this;
        }

        public PointsScheduleBuilder flyingIn(CabinClass cabinClass) {
            this.cabinClass = cabinClass;
            return this;
        }

        public PointsSchedule earns(int points) {
            return new PointsSchedule(departure,destinaton, cabinClass, points);
        }
    }
}
