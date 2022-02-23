package com.manning.bddinaction.flyinghigh.domain.persona;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The information we need to validate an email address
 */
public record EmailValidation(
        @JsonProperty("frequentFlyerNumber") String frequentFlyerNumber,
        @JsonProperty("email") String email,
        @JsonProperty("token") String token) {
}
