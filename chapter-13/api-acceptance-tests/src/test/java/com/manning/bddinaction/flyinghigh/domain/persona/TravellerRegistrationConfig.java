package com.manning.bddinaction.flyinghigh.domain.persona;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TravellerRegistrationConfig {

    /**
     * Find a traveller with a given name in the travellers.conf file.
     */
    public static TravellerRegistration forTravellerNamed(String name) {
        Config travellerDetails = ConfigFactory.load("testdata/travellers").getConfig(name);
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
