package com.manning.bddinaction.flyinghigh.stepdefinitions;

import com.manning.bddinaction.flyinghigh.domain.persona.Traveller;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerPersona;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;

public class RegistrationStepDefinitions {

    /**
     * Here we store all the information about the new Frequent Flyer member
     */
    Traveller newMember;

    @ParameterType(".*")
    public Traveller traveller(String travellerName) {
        return TravellerPersona.withName(travellerName);
    }

    @Given("{traveller} does not have a Frequent Flyer account")
    public void user_does_not_have_a_frequent_flyer_account(Traveller traveller) {
        newMember = traveller.withAUniqueEmailAddress();
    }

    @When("she registers for a new Frequent Flyer account with valid details")
    public void she_registers_for_a_new_frequent_flyer_account_with_valid_details() {
        // registration via the API
    }

    @And("she confirms her email address")
    public void she_confirms_her_email_address() {
        // confirm email token
    }

    @Then("she should have a new account with {int} points")
    public void she_should_have_a_new_account_with_points(Integer int1) {
        // Get account status and details
    }

}
