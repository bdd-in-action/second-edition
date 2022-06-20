package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import com.google.common.collect.ImmutableMap;
import io.restassured.RestAssured;
import net.serenitybdd.core.environment.EnvironmentSpecificConfiguration;
import net.thucydides.core.util.EnvironmentVariables;

public class LoginAPI {

    protected EnvironmentVariables environmentVariables;

    private String adminUser = "admin@flyinghigh.com";
    private String adminPassword = "admin";

    public String getAuthToken() {

        String authToken = RestAssured.given()
                .contentType("application/json")
                .accept("*/*")
                .body(ImmutableMap.of("email", adminUser, "password", adminPassword))
                .post(endpointUrlFor("/auth/login"))
                .thenReturn()
                .body().jsonPath().getString("access_token");

        return authToken;
    }

    protected String endpointUrlFor(String path) {
        String apiBaseUrl = EnvironmentSpecificConfiguration.from(environmentVariables).getProperty("api.base.url");
        return apiBaseUrl + path;
    }

}
