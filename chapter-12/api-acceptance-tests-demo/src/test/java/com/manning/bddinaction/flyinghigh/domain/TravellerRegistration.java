package com.manning.bddinaction.flyinghigh.domain;

public record TravellerRegistration(
        String firstName,
        String lastName,
        String title,
        String email,
        String password,
        String address,
        String country) {
}
