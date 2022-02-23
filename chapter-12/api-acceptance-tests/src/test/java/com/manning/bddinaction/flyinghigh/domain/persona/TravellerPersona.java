package com.manning.bddinaction.flyinghigh.domain.persona;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TravellerPersona {

    /**
     * Traveller info is stored in the travellers.conf file
     */
    private static Config travellers = ConfigFactory.load("testdata/travellers");

    /**
     * Find a traveller with a given name in the travellers.conf file.
     */
    public static TravellerRegistration withName(String name) {
        Config travellerDetails = travellers.getConfig(name);
        return new TravellerRegistration(
                travellerDetails.getString("firstName"),
                travellerDetails.getString("lastName"),
                travellerDetails.getString("title"),
                travellerDetails.getString("email"),
                travellerDetails.getString("password"),
                travellerDetails.getString("address"),
                travellerDetails.getString("country")
        );
    }
}
