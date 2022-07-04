package com.manning.bddinaction.frequentflyer.acceptancetests;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "classpath:features",
        glue = "com.manning.bddinaction.frequentflyer.acceptancetests"
)
public class AcceptanceTestSuite {}
