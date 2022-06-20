package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api.CitiesAPI;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;

import static org.assertj.core.api.Assertions.assertThat;

public class CitiesAndRegionsStepDefinitions {

    @Steps
    CitiesAPI cities;

    String cityName;

    @When("points are calculated for a flight to or from {}")
    public void pointsAreCalculatedForAFlightToOrFromCity(String cityName) {
        this.cityName = cityName;
    }

    @Then("the city should be considered to be part of the {word} region")
    public void theCityShouldBeConsideredToBePartOfTheRegion(String regionName) {
        assertThat(cities.regionOf(cityName)).isEqualToIgnoringCase(regionName);
    }

}
