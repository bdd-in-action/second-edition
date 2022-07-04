package com.manning.bddinaction.flyinghigh.apis;

import io.restassured.RestAssured;
import net.serenitybdd.core.Serenity;

public class ConfigurableAPIClient {
    public ConfigurableAPIClient() {
        RestAssured.baseURI = Serenity.environmentVariables().getProperty("base.url",
                                                                          "http://localhost:3000");
    }
}
