package com.examplcom.manning.bddinaction.frequentflyer.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PointsMultiplier {

    public static PointsMultiplier STANDARD_MULTIPLIER = new PointsMultiplier(FrequentFlyerStatus.Standard, 1.0);

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private FrequentFlyerStatus status;
    private double multiplier;

    public PointsMultiplier() {}

    private PointsMultiplier(FrequentFlyerStatus status, double multiplier) {
        this.status = status;
        this.multiplier = multiplier;
    }

    public int getId() {
        return id;
    }

    public FrequentFlyerStatus getStatus() {
        return status;
    }

    public double getMultiplier() {
        return multiplier;
    }

    public static PointMultiplierBuilder forStatus(FrequentFlyerStatus status) {
        return new PointMultiplierBuilder(status);
    }

    public static class PointMultiplierBuilder {
        private final FrequentFlyerStatus status;

        PointMultiplierBuilder(FrequentFlyerStatus status) {
            this.status = status;
        }

        public PointsMultiplier is(double multiplier) {
            return new PointsMultiplier(status, multiplier);
        }
    }
}
