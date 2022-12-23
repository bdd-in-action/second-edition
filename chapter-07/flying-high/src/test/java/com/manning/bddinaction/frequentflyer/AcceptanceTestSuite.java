package com.manning.bddinaction.frequentflyer;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        plugin = {"pretty","html:target/output"},
        features = "classpath:features"
)
public class AcceptanceTestSuite { }