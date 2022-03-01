package com.manning.bddinaction.flyinghigh.domain.persona;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * A summary of the frequent flyer account status
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record TravellerAccountStatus (int statusPoints,
                                      MembershipTier tier,
                                      boolean isActivated) {}
