package com.manning.bddinaction.flyinghigh.apis;

import com.manning.bddinaction.flyinghigh.domain.TravellerRegistration;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import net.serenitybdd.rest.SerenityRest;

public class MembershipAPI {
    public String register(TravellerRegistration newMember) {

        return SerenityRest.given()
                .contentType(ContentType.JSON)
                .body(newMember)
                .post("http://localhost:3000/api/frequent-flyer")
                .jsonPath()
                .getString("frequentFlyerNumber");
    }

    public void deleteFrequentFlyer(String frequentFlyerNumber) {
        RestAssured.given().pathParam("id", frequentFlyerNumber)
                .delete("http://localhost:3000/api/frequent-flyer/{id}")
                .then().statusCode(200);
    }
}
