package com.manning.bddinaction.flyinghigh.apis;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

public class TokenAPI extends ConfigurableAPIClient {
    /**
     * Look up the unique token used to validate the email for a given frequent flyer number.
     */
    public String getEmailToken(String frequentFlyerNumber) {
        return RestAssured.
                given().pathParam("id", frequentFlyerNumber)
                .get("/tokens/frequent-flyer/{id}").getBody().asString();
    }
}
