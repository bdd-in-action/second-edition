package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions.usingpageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.actions.registration.Register;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersona;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.RegistrationForm;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;

public class RegistrationStepDefinitions {

    @ParameterType(".*")
    public Traveller traveller(String travellerName) {
        return TravellerPersona.withName(travellerName);
    }

    Traveller newTraveller;

    @Given("{traveller} does not have a Frequent Flyer account")
    public void doesNotHaveAnAccount(Traveller traveller) {
        newTraveller = traveller.withAUniqueEmailAddress();
    }

    @Steps
    Register register;

    @When("{traveller} registers as a Frequent Flyer member")
    public void registersAsAFrequentFlyer(Traveller traveller) {
        register.as(traveller);
    }

    @Then("s/he should be able to log on to the Frequent Flyer application")
    public void canLogOnToApplication() {

    }

    private RegistrationForm registrationForm() { return new RegistrationForm(WebTestSupport.currentDriver()); }

    @When("he/she registers as a Frequent Flyer member")
    public void registersAsAFrequentFlyer() {


//        loginPage().open().navigateToRegistration();
//        registrationForm().registerAs(newTraveller);
    }

}
