package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;
import net.serenitybdd.core.environment.EnvironmentSpecificConfiguration;
import net.serenitybdd.rest.SerenityRest;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.util.EnvironmentVariables;

public class AuthenticatedAPI {
    protected EnvironmentVariables environmentVariables;

    /**
     * This class provides methods to obtain the auth token needed to perform API operations
     */
    @Steps
    private LoginAPI loginAPI;

    protected String endpointUrlFor(String path) {
        String apiBaseUrl = EnvironmentSpecificConfiguration.from(environmentVariables).getProperty("api.base.url");
        return apiBaseUrl + path;
    }

    protected RequestSpecification withAuthentication() {
        return RestAssured.given()
                .auth().oauth2(loginAPI.getAuthToken())
                .contentType("application/json")
                .accept("*/*");
    }

}
