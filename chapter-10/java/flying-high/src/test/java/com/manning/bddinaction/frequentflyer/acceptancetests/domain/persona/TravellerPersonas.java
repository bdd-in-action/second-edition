package com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TravellerPersonas {

    private static Config travellers
            = ConfigFactory.load("testdata/travellers");

    public static Traveller findByName(String name) {
        Config travellerDetails = travellers.getConfig(name);
        return new Traveller(
                travellerDetails.getString("email"),
                travellerDetails.getString("password"),
                travellerDetails.getString("title"),
                travellerDetails.getString("firstName"),
                travellerDetails.getString("lastName"),
                travellerDetails.getString("address"),
                travellerDetails.getString("country"),
                travellerDetails.getString("seatPreference"),
                true
        );
    }
}
