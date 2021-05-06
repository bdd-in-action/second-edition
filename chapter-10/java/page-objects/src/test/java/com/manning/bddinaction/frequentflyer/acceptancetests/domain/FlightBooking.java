package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

/**
 * The flight booking record shown in the My Account page
 */
public record FlightBooking(String departure, String destination, Integer pointsEarned) {}
