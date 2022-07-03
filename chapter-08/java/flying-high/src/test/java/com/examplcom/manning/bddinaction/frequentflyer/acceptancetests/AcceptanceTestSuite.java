package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "classpath:features"
)
@SpringBootTest
public class AcceptanceTestSuite {}
