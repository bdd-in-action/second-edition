package com.manning.bddinaction.flyinghigh.domain.persona;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Random;

/**
 * The information we need to send when registering a new Frequent Flyer.
 * We use the @JsonProperty annotation in order to allow RestAssured to correctly serialise the record properties into a JSON format.
 */
public record TravellerRegistration(
        @JsonProperty("firstName") String firstName,
        @JsonProperty("lastName") String lastName,
        @JsonProperty("title") String title,
        @JsonProperty("email") String email,
        @JsonProperty("password") String password,
        @JsonProperty("address") String address,
        @JsonProperty("country") String country) {

    public TravellerRegistration withAUniqueEmailAddress() {
        return new TravellerRegistration(firstName, lastName, title,
                this.email.replace("@", "" + new Random().nextInt() + "@"),
                password, address, country);
    }

    public TravellerRegistration withEmail(String email) {
        return new TravellerRegistration(firstName, lastName, title, email, password, address, country);
    }
}
