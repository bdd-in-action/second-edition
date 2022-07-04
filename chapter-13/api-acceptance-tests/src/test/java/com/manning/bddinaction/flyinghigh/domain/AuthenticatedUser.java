package com.manning.bddinaction.flyinghigh.domain;

public record AuthenticatedUser(String frequentFlyerNumber, String email, String firstName, String lastName, boolean isActivated, String jwtToken) {
}
