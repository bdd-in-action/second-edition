package com.manning.bddinaction.frequentflyer.stepdefinitions;

import com.manning.bddinaction.frequentflyer.model.FlightDatabase;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FrequentFlyerPointsStepDefinitions {

    FlightDatabase flightDatabase = FlightDatabase.instance();

    @Given("the distance from {} to {} is {int} km")
    public void recordFlightDistance(String departure, String destination, int distanceInKm) {
        flightDatabase.recordTripDistance()
                      .from(departure)
                      .to(destination)
                      .as(distanceInKm).kilometres();
    }

    @Given("{word} is a Frequent Flyer traveller")
    public void createFrequentFlyerNamed(String frequentFlyer) {
        // TODO: Setup a frequent flyer traveller account
    }

    @When("he/she completes a flight between {} and {}")
    public void travellerCompletesAFlight(String departure, String destination) {
        // TODO: Record the flight details
    }

    @Then("he/she should earn {int} points")
    public void shouldEarnPoints(int expectedPoints) {
        // TODO: Check that the traveller has earned this many points
    }

//
//
//
//    @Given("the flying distance between Sydney and Melbourne is {int} km")
//    public void theFlyingDistanceBetweenSydneyAndMelbourneIsKm(int arg0) {
//    }
//
//    @And("(?:.*) is a standard Frequent Flyer member")
//    public void iAmAStandardFrequentFlyerMember() {
//    }
//
//    @When("(?:.*) flies from Sydney to Melbourne")
//    public void iFlyFromSydneyToMelbourne() {
//    }
//
//    @When("(?:.*) flies from Sydney to Melbourne in Business class")
//    public void iFlyFromSydneyToMelbourneInBusinessClass() {
//    }
//
//    @When("(?:.*) flies from Sydney to Melbourne on a Partner Airlines flight")
//    public void iFlyFromSydneyToMelbourneOnAPartnerAirlinesFlight() {
//    }
//
//    @Given("Fred is a (.*) Frequent Flyer member")
//    public void fredIsAStatusFrequentFlyerMember(String status) {
//    }
//
//    @When("Fred flies on a flight that is worth (.*) base points")
//    public void fredFliesOnAFlightThatIsWorthBaseBasePoints(int points) {
//    }
//
//    @Then("^s?he should earn a status bonus of (.*)")
//    public void heShouldEarnAStatusBonusOfBonus(int bonus) {
//    }
//
//    @And("^s?he should have guaranteed minimum earned points per trip of (.*)")
//    public void heShouldHaveGuaranteedMinimumEarnedPointsPerTripOfMinimum(int minimum) {
//    }
//
//    @Given("^(.*) and (.*) are family members")
//    public void familyMembers(String giver, String receiver) {
//
//    }
//
//    @And("they have the following accounts:")
//    public void theyHaveTheFollowingAccounts(DataTable accountDetails) {
//    }
//
//    @When("{word} transfers {int} points to {word}")
//    public void martinTransfersPointsToDanielle(String giver, int amount, String receiver) {
//    }
//
//    @Then("the accounts should be as follows:")
//    public void theAccountsShouldBeAsFollows(DataTable accountDetails) {
//    }
//
//    @Given("Todd has just joined the Frequent Flyer programme")
//    public void toddHasJustJoinedTheFrequentFlyerProgramme() {
//    }
//
//    @And("Todd asks for the following flight to be credited to his account:")
//    public void toddAsksForTheFollowingFlightToBeCreditedToHisAccount(DataTable fights) {
//    }
//
//    @Then("the flight should be considered (.*)")
//    public void theFlightShouldBeConsideredEligibility(String eligibility) {
//    }
}
