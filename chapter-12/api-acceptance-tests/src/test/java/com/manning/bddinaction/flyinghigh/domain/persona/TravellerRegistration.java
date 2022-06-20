package com.manning.bddinaction.flyinghigh.domain.persona;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

/**
 * The information we need to send when registering a new Frequent Flyer.
 */
public record TravellerRegistration(String firstName,
                                    String lastName,
                                    String title,
                                    String email,
                                    String password,
                                    String address,
                                    String country) {

    public TravellerRegistration withEmail(String email) {
        return new TravellerRegistration(firstName, lastName, title, email, password, address, country);
    }

    public TravellerRegistration withMissing(String fieldName) {
        return switch (fieldName) {
            case "firstName" -> new TravellerRegistration("", lastName, title, email, password, address, country);
            case "lastName" -> new TravellerRegistration(firstName, "", title, email, password, address, country);
            case "title" -> new TravellerRegistration(firstName, lastName, "", email, password, address, country);
            case "email" -> new TravellerRegistration(firstName, lastName, title, "", password, address, country);
            case "password" -> new TravellerRegistration(firstName, lastName, title, email, "", address, country);
            case "address" -> new TravellerRegistration(firstName, lastName, title, email, password, "", country);
            case "country" -> new TravellerRegistration(firstName, lastName, title, email, password, address, "");
            default -> this;
        };
    }
}
