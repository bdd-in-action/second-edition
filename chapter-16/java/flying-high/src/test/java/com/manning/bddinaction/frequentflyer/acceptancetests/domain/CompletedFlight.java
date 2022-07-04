package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

import com.google.common.base.Objects;

/**
 * The flight booking record shown in the My Account page
 */
public record CompletedFlight(String departure, String destination, Integer pointsEarned) {
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompletedFlight that = (CompletedFlight) o;

        // Only compare points earned if they are not null
        boolean pointsEarnedAreEquivalent = true;
        if (pointsEarned != null && that.pointsEarned != null) {
            pointsEarnedAreEquivalent = Objects.equal(pointsEarned, that.pointsEarned);
        }
        return Objects.equal(departure, that.departure) && Objects.equal(destination, that.destination) && pointsEarnedAreEquivalent;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(departure, destination);
    }
}
