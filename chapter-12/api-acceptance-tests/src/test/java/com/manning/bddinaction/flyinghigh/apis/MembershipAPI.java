package com.manning.bddinaction.flyinghigh.apis;

import com.manning.bddinaction.flyinghigh.domain.persona.EmailValidation;
import com.manning.bddinaction.flyinghigh.domain.persona.MembershipTier;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerAccountStatus;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import net.serenitybdd.rest.SerenityRest;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.util.EnvironmentVariables;

public class MembershipAPI {

    EnvironmentVariables environmentVariables;

    /**
     * Register a new Frequent Flyer member, returning the new Frequent Flyer number
     */
    public String register(TravellerRegistration newMember) {
        Response response = SerenityRest.given()
                .contentType(ContentType.JSON)
                .body(newMember)
                .post("http://localhost:3000/api/frequent-flyer");


        if (response.statusCode() >= 400) {
            throw new InvalidRegistrationException(response.jsonPath().getString("message"));
        }
        return response.jsonPath().getString("frequentFlyerNumber");
    }

    /**
     * Look up the unique token used to validate the email for a given frequent flyer number.
     */
    public String getEmailToken(String frequentFlyerNumber) {
        return RestAssured.
                given().pathParam("id", frequentFlyerNumber)
                .get("http://localhost:3000/api/tokens/frequent-flyer/{id}").getBody().asString();
    }

    /**
     * Confirm a Frequent Flyer email address.
     */
    public void confirmEmail(String frequentFlyerNumber, String email, String token) {
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(new EmailValidation(frequentFlyerNumber, email, token))
                .post("http://localhost:3000/api/frequent-flyer/email-confirmation")
                .then().statusCode(201);
    }

    public TravellerAccountStatus findMemberByFrequentFlyerNumber(String frequentFlyerNumber) {

        Response response = RestAssured.given()
                .pathParam("frequentFlyerNumber", frequentFlyerNumber)
                .get("http://localhost:3000/api/frequent-flyer/{frequentFlyerNumber}");

        String number = response.jsonPath().getString("frequentFlyerNumber");
        int statusPoints = response.jsonPath().getInt("statusPoints");
        boolean isActivated = response.jsonPath().getBoolean("isActivated");
        MembershipTier tier = MembershipTier.valueOf(response.jsonPath().getString("tier"));

        return new TravellerAccountStatus(number, statusPoints, tier, isActivated);
    }

    public boolean isActivated(String frequentFlyerNumber) {
        return RestAssured.given().pathParam("id", frequentFlyerNumber)
                .get("http://localhost:3000/api/frequent-flyer/{id}")
                .jsonPath()
                .getBoolean("isActivated");
    }

    public void deleteFrequentFlyer(String frequentFlyerNumber) {
        RestAssured.given().pathParam("id", frequentFlyerNumber)
                   .delete("http://localhost:3000/api/frequent-flyer/{id}").then().statusCode(200);
    }
}
