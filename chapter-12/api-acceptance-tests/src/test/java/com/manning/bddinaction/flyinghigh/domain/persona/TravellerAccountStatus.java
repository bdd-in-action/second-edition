package com.manning.bddinaction.flyinghigh.domain.persona;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * A summary of the frequent flyer account status
 */
public record TravellerAccountStatus (
        @JsonProperty("frequentFlyerNumber") String frequentFlyerNumber,
        @JsonProperty("statusPoints") int statusPoints,
        @JsonProperty("tier") MembershipTier tier,
        @JsonProperty("isActivated") boolean isActivated) {
}
