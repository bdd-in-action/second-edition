package com.manning.bddinaction.flyinghigh.apis;

import com.google.common.collect.ImmutableMap;
import com.manning.bddinaction.flyinghigh.domain.AuthenticatedUser;
import com.manning.bddinaction.flyinghigh.domain.persona.EmailValidation;
import com.manning.bddinaction.flyinghigh.domain.persona.MembershipTier;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerAccountStatus;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.util.EnvironmentVariables;

public class AuthenticationAPI extends ConfigurableAPIClient {

    /**
     * Attempt to login to the application via the authentication API
     */
    public AuthenticatedUser authenticate(String email, String password) {
        Response response = RestAssured.given()
                .contentType(ContentType.JSON)
                .body(ImmutableMap.of("email", email,"password", password))
                .post("/users/authenticate");

        if (response.statusCode() >= 400) {
            throw new AuthenticationException(response.jsonPath().getString("message"));
        }

        return response.as(AuthenticatedUser.class);
    }
}
