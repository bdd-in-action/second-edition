package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.City;

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

    /**
     * Find the region of a given city
     * We return the first city matching this name.
     */
    public City findCityByName(String cityName) {
        return withAuthentication()
                .queryParam("cityname", cityName)
                .get(endpointUrlFor("/flights/cities"))
                .andReturn().jsonPath().getObject("[0]", City.class);
    }
}
