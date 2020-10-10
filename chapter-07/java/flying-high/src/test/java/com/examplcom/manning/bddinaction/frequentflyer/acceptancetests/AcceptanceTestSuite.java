package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.spring.TestConfig;
import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
//        plugin = {"com.manning.bddinaction.frequentflyer.stepdefinitions.DatabaseServerHandler"},
        features = "classpath:features"
)
@SpringBootTest
public class AcceptanceTestSuite {}