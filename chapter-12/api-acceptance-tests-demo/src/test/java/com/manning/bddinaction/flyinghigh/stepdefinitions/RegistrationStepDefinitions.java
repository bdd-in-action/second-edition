package com.manning.bddinaction.flyinghigh.stepdefinitions;

import com.manning.bddinaction.flyinghigh.apis.MembershipAPI;
import com.manning.bddinaction.flyinghigh.domain.TravellerPersona;
import com.manning.bddinaction.flyinghigh.domain.TravellerRegistration;
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;

public class RegistrationStepDefinitions {

    TravellerRegistration newMember;
    String newFrequentFlyerNumber;

    @Steps
    MembershipAPI membershipAPI;


    @Given("{} does not have a Frequent Flyer account")
    public void does_not_have_a_frequent_flyer_account(String travellerName) {
        newMember = TravellerPersona.withName(travellerName);
    }
    @When("she registers for a new Frequent Flyer account")
    public void she_registers_for_a_new_frequent_flyer_account() {
        // Write code here that turns the phrase above into concrete actions
        newFrequentFlyerNumber = membershipAPI.register(newMember);
    }

    @When("she confirms her email address")
    public void she_confirms_her_email_address() {
        // Write code here that turns the phrase above into concrete actions
      //  throw new io.cucumber.java.PendingException();
    }
    @Then("she should have a new Standard tier account with {int} points")
    public void she_should_have_a_new_standard_tier_account_with_points(Integer int1) {
        // Write code here that turns the phrase above into concrete actions
     //   throw new io.cucumber.java.PendingException();
    }

    @After
    public void deleteFrequentFlyerAccount() {
        if (newFrequentFlyerNumber != null) {
            membershipAPI.deleteFrequentFlyer(newFrequentFlyerNumber);
        }
    }
}
