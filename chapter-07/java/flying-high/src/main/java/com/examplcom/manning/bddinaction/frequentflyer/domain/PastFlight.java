package com.examplcom.manning.bddinaction.frequentflyer.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

import java.time.Duration;
import java.time.LocalDate;
import java.util.Objects;

public class PastFlight {
    private String flightNumber;

    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate scheduledDate;

    private String departure;
    private String destination;
    private FlightStatus status;
    private Boolean wasDelayed;
    private Duration delayedBy;

    public PastFlight(String flightNumber,
                      LocalDate scheduledDate,
                      String departure, String destination, FlightStatus status,
                      Boolean wasDelayed,
                      Duration delayedBy) {
        this.flightNumber = flightNumber;
        this.scheduledDate = scheduledDate;
        this.departure = departure;
        this.destination = destination;
        this.status = status;
        this.wasDelayed = wasDelayed;
        this.delayedBy = delayedBy;
    }

    public PastFlight() {}

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

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public void setScheduledDate(LocalDate scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public void setStatus(FlightStatus status) {
        this.status = status;
    }

    public void setWasDelayed(Boolean wasDelayed) {
        this.wasDelayed = wasDelayed;
    }

    public void setDelayedBy(Duration delayedBy) {
        this.delayedBy = delayedBy;
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
