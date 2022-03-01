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

public class EventBusAPI extends ConfigurableAPIClient {

    /**
     * Find the NewFrequentFlyerEvent event in the event bus logs.
     */
    public boolean newFrequentFlyerEventWasPublishedFor(String email) {
        return RestAssured.given()
                .contentType(ContentType.JSON)
                .queryParam("field","email")
                .queryParam("value",email)
                .get("/events/NewFrequentFlyerEvent")
                .thenReturn().statusCode() == 200;
    }
}
