package com.manning.bddinaction.flyinghigh.apis;

import com.manning.bddinaction.flyinghigh.domain.persona.EmailValidation;
import com.manning.bddinaction.flyinghigh.domain.persona.MembershipTier;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerAccountStatus;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.util.EnvironmentVariables;

public class EventBusAPI {

    EnvironmentVariables environmentVariables;

    /**
     * Find the NewFrequentFlyerEvent event in the event bus logs.
     */
    public boolean newFrequentFlyerEventWasPublishedFor(String frequentFlyerNumber) {
        return RestAssured.given()
                .contentType(ContentType.JSON)
                .queryParam("field","frequentFlyerNumber")
                .queryParam("value",frequentFlyerNumber)
                .get("http://localhost:3000/api/events/NewFrequentFlyerEvent")
                .thenReturn().statusCode() == 200;
    }
}
