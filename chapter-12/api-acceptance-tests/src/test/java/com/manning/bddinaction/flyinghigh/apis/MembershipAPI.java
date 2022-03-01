package com.manning.bddinaction.flyinghigh.apis;

import com.manning.bddinaction.flyinghigh.domain.persona.EmailValidation;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerAccountStatus;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class MembershipAPI extends ConfigurableAPIClient {

    /**
     * Register a new Frequent Flyer member, returning the new Frequent Flyer number
     */
    public String register(TravellerRegistration newMember) {
        RestAssured.baseURI = "http://localhost:3000/api";
        Response response = RestAssured.given()
                .contentType(ContentType.JSON)
                .body(newMember)
                .post("/frequent-flyer");

        if (response.statusCode() >= 400) {
            throw new InvalidRegistrationException(response.jsonPath().getString("message"));
        }
        return response.jsonPath().getString("frequentFlyerNumber");
    }

    /**
     * Confirm a Frequent Flyer email address.
     */
    public void confirmEmail(String frequentFlyerNumber, String email, String token) {
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(new EmailValidation(frequentFlyerNumber, email, token))
                .post("/frequent-flyer/email-confirmation")
                .then()
                .statusCode(201);
    }

    public TravellerAccountStatus getMemberStatus(String frequentFlyerNumber) {
        return RestAssured.given().get("/frequent-flyer/{frequentFlyerNumber}", frequentFlyerNumber)
                          .jsonPath()
                          .getObject(".", TravellerAccountStatus.class);
    }

    public boolean isActivated(String frequentFlyerNumber) {
        return RestAssured.given().pathParam("id", frequentFlyerNumber)
                .get("/frequent-flyer/{id}")
                .jsonPath()
                .getBoolean("isActivated");
    }

    public void deleteFrequentFlyer(String frequentFlyerNumber) {
        RestAssured.when()
                   .delete("/frequent-flyer/{id}", frequentFlyerNumber)
                   .then().statusCode(200);
    }
}
