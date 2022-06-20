package com.manning.bddinaction.frequentflyer.acceptancetests;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        publish = true,
        features = "classpath:features"
)
public class AcceptanceTestSuite {
}
