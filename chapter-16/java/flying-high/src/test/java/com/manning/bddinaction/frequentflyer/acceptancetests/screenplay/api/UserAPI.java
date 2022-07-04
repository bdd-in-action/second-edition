package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import com.google.common.base.Preconditions;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import io.restassured.response.Response;

public class UserAPI extends AuthenticatedAPI {

    /**
     * Create a new user and return the new user ID
     */
    public String createNewUser(Traveller traveller) {

        Response response = withAuthentication().body(traveller).post(endpointUrlFor("/users"));

        String userId = response.body().jsonPath().getString("userId");
        return userId;
    }

    /**
     * Assign points to a specific user
     */
    public Traveller assignPoints(Traveller traveller, int points) {

        Preconditions.checkNotNull(traveller.userId(),"We need a user ID to assign points");

        withAuthentication()
                .pathParam("userId", traveller.userId())
                .get(endpointUrlFor("/users/{userId}/reset-points"));

        withAuthentication()
                .pathParam("userId", traveller.userId())
                .queryParam("points", points)
                .get(endpointUrlFor("/users/{userId}/earn-points"));

        return findUserById(traveller.userId());
    }

    public Traveller findUserById(String userId) {
        return withAuthentication()
                .queryParam("userId", userId)
                .get(endpointUrlFor("/users/id"))
                .as(Traveller.class);
    }
}
