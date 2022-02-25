package com.manning.bddinaction.flyinghigh.domain;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TravellerPersona {

    private static Config travellers = ConfigFactory.load("testdata/travellers");

    public static TravellerRegistration withName(String travellerName) {
        Config travellerDetails = travellers.getConfig(travellerName);
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
