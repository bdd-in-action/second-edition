package com.manning.bddinaction.frequentflyer.stepdefinitions;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FrequentFlyerPointsStepDefinitions {


    @Given("the distance from {} to {} is {int} km")
    public void recordFlightDistance(String departure, String destination, int distanceInKm) {
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

    @And("{} is a standard Frequent Flyer member")
    public void aStandardFrequentFlyerMember(String frequentFlyer) {
    }

    @When("{} flies from {} to {}")
    public void fliesFromSydneyToMelbourne(String frequentFlyer, String departure, String destination) {
    }

    @When("{} flies from {} to {} in {} class")
    public void flyFromSydneyToMelbourneInBusinessClass(String frequentFlyer, String departure, String destination, String flyerClass) {
    }

    @When("{} flies from {} to {} on a Partner Airlines flight")
    public void iFlyFromSydneyToMelbourneOnAPartnerAirlinesFlight(String frequentFlyer, String departure, String destination) {
    }

    @Given("{} is a {} Frequent Flyer member")
    public void fredIsAStatusFrequentFlyerMember(String frequentFlyer, String status) {
    }

    @When("{} flies on a flight that is worth {int} base points")
    public void fredFliesOnAFlightThatIsWorthBaseBasePoints(String frequentFlyer, int points) {
    }

    @Then("he/she should earn a status bonus of {int}")
    public void heShouldEarnAStatusBonusOfBonus(int bonus) {
    }

    @And("he/she should have guaranteed minimum earned points per trip of {int}")
    public void heShouldHaveGuaranteedMinimumEarnedPointsPerTripOfMinimum(int minimum) {
    }

    @Given("{word} and {word} are family members")
    public void familyMembers(String giver, String receiver) {

    }

    @And("they have the following accounts:")
    public void theyHaveTheFollowingAccounts(DataTable accountDetails) {
    }

    @When("{word} transfers {int} points to {word}")
    public void martinTransfersPointsToDanielle(String giver, int amount, String receiver) {
    }

    @Then("the accounts should be as follows:")
    public void theAccountsShouldBeAsFollows(DataTable accountDetails) {
    }

    @Given("Todd has just joined the Frequent Flyer programme")
    public void toddHasJustJoinedTheFrequentFlyerProgramme() {
    }

    @And("Todd asks for the following flight to be credited to his account:")
    public void toddAsksForTheFollowingFlightToBeCreditedToHisAccount(DataTable fights) {
    }

    @Then("the flight should be considered {word}")
    public void theFlightShouldBeConsideredEligibility(String eligibility) {
    }


    @Given("Tara has booked the following flight:")
    public void tara_has_booked_the_following_flight(io.cucumber.datatable.DataTable dataTable) {
    }
    @When("Tara updates the flight date to {}")
    public void tara_updates_the_flight_date_to(String flightDate) {
    }
    @Then("there should be no additional charge")
    public void there_should_be_no_additional_charge() {
    }
    @Then("the booking should be updated to the following:")
    public void the_booking_should_be_updated_to_the_following(io.cucumber.datatable.DataTable dataTable) {

    }

    @Given("Terry joined the Frequent Flyer program on {}")
    public void terry_joined_the_frequent_flyer_program_on(String start) {
    }

    @When("he asks for the following flight to count towards his Frequent Flyer points:")
    public void he_asks_for_the_following_flight_to_count_towards_his_frequent_flyer_points(io.cucumber.datatable.DataTable dataTable) {
    }
    @Then("the flight should be credited: {}")
    public void the_flight_should_be_credited(String result) {
    }

    @Given("Tara has logged on to the Frequent Flyer application using tara@email.com")
    public void tara_has_logged_on_to_the_frequent_flyer_application_using_tara_email_com() {
    }

    @When("the fare difference is ${int}")
    public void the_fare_difference_is_$(Integer int1) {
    }


    @Then("Tara should be charged ${int}")
    public void tara_should_be_charged_$(Integer int1) {
    }

    @When("Terry requests credit for flight {} on {} with Flying High")
    public void terry_requests_credit_for_flight_fh_on_with_flying_high(String flight, String date) {
    }

    @When("Terry requests credit for flight {} on {} with Other Air")
    public void terry_requests_credit_for_flight_oa_on_with_other_air(String flight, String date) {
    }
}
