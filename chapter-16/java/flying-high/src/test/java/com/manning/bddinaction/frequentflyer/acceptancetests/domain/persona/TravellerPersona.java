package com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TravellerPersona {

    private static Config travellers
            = ConfigFactory.load("testdata/travellers");

    public static Traveller withName(String name) {
        Config travellerDetails = travellers.getConfig(name);
        return new Traveller(
                null,
                travellerDetails.getString("email"),
                travellerDetails.getString("password"),
                travellerDetails.getString("title"),
                travellerDetails.getString("firstName"),
                travellerDetails.getString("lastName"),
                travellerDetails.getString("address"),
                travellerDetails.getString("country"),
                travellerDetails.getString("seatPreference"),
                travellerDetails.getBoolean("newsletterSub"),
                travellerDetails.getBoolean("agreesToTermsAndConditions"),
                0,
                UserLevel.STANDARD
        );
    }
}
