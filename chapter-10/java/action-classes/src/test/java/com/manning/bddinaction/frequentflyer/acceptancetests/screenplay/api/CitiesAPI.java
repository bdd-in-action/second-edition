package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

/**
 * Query the cities static data
 */
public class CitiesAPI extends AuthenticatedAPI {

    /**
     * Find the region of a given city
     */
    public String regionOf(String cityName) {

        return withAuthentication()
                .queryParam("cityname", cityName)
                .get(endpointUrlFor("/flights/cities"))
                .andReturn().jsonPath().getString("[0].region");
    }
}
