package com.manning.bddinaction.flyinghigh.stepdefinitions;

import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EmailValidationStepDefinitions {
    @When("{traveller} registers with an email of {}")
    public void tracyRegistersWithAnEmailOfEmail(TravellerRegistration traveller, String email) {
    }

    @Then("the email address should be: {acceptedOrRejected}")
    public void theEmailAddressShouldBeAcceptedAccepted(boolean accepted) {
    }
}
