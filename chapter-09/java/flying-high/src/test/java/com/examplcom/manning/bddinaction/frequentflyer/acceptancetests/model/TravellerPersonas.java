package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.model;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TravellerPersonas {

    private static Config personaData = ConfigFactory.load("testdata/travellers");

    public static Traveller withName(String name) {
        Config travellerDetails = personaData.getConfig(name);
        return new Traveller(
                travellerDetails.getString("firstName"),
                travellerDetails.getString("lastName"),
                travellerDetails.getString("email"),
                travellerDetails.getString("street"),
                travellerDetails.getString("city"),
                travellerDetails.getString("state"),
                travellerDetails.getString("postCode"),
                travellerDetails.getString("country"),
                travellerDetails.getString("telephone"),
                travellerDetails.getString("dateOfBirth")
        );
    }
}
