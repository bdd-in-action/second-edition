package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import com.google.common.base.Preconditions;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;

public class UserAPI extends AuthenticatedAPI {

    /**
     * Create a new user and return the new user ID
     */
    public String createNewUser(Traveller traveller) {

        String userId = withAuthentication()
                .body(traveller)
                .post(endpointUrlFor("/users"))
                .body().jsonPath().getString("userId");

        return userId;
    }

    /**
     * Assign points to a specific user
     */
    public Traveller assignPoints(Traveller traveller, int points) {

        Preconditions.checkNotNull(traveller.getUserId(),"We need a user ID to assign points");

        withAuthentication()
                .pathParam("userId", traveller.getUserId())
                .get(endpointUrlFor("/users/{userId}/reset-points"));

        withAuthentication()
                .pathParam("userId", traveller.getUserId())
                .queryParam("points", points)
                .get(endpointUrlFor("/users/{userId}/earn-points"));

        return findUserById(traveller.getUserId());
    }

    public Traveller findUserById(String userId) {
        return withAuthentication()
                .queryParam("userId", userId)
                .get(endpointUrlFor("/users/id"))
                .andReturn().body().as(Traveller.class);
    }
}
