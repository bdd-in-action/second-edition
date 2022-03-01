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
}
