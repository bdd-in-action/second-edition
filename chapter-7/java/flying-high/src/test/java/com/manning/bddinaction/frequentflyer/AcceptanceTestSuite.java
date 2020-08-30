package com.manning.bddinaction.frequentflyer;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        plugin = {"pretty"},
        features = "classpath:features/frequent_flyer/earning_points/earning_points_from_flights.feature"
)
public class AcceptanceTestSuite { }