package com.examplcom.manning.bddinaction.frequentflyer.domain;

import java.time.Duration;
import java.time.LocalDate;
import java.util.Objects;

public class PastFlight {
    private String flightNumber;
    private LocalDate scheduledDate;
    private FlightStatus status;
    private Boolean wasDelayed;
    private Duration delayedBy;

    public PastFlight(String flightNumber, LocalDate scheduledDate, FlightStatus status, Boolean wasDelayed, Duration delayedBy) {
        this.flightNumber = flightNumber;
        this.scheduledDate = scheduledDate;
        this.status = status;
        this.wasDelayed = wasDelayed;
        this.delayedBy = delayedBy;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public LocalDate getScheduledDate() {
        return scheduledDate;
    }

    public FlightStatus getStatus() {
        return status;
    }

    public Boolean getWasDelayed() {
        return wasDelayed;
    }

    public Duration getDelayedBy() {
        return delayedBy;
    }

    @Override
    public String toString() {
        return "PastFlight{" +
                "flightNumber='" + flightNumber + '\'' +
                ", scheduledDate=" + scheduledDate +
                ", status=" + status +
                ", wasDelayed=" + wasDelayed +
                ", delayedBy=" + delayedBy +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PastFlight that = (PastFlight) o;
        return Objects.equals(flightNumber, that.flightNumber) &&
                Objects.equals(scheduledDate, that.scheduledDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(flightNumber, scheduledDate);
    }
}
