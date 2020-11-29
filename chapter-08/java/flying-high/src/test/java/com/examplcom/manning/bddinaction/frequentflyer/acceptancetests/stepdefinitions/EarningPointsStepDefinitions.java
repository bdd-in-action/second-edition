package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.spring.TestDatabase;
import com.examplcom.manning.bddinaction.frequentflyer.domain.*;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.FrequentFlyerMemberRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.PointsMultiplierRepository;
import com.examplcom.manning.bddinaction.frequentflyer.repositories.PointsScheduleRepository;
import com.examplcom.manning.bddinaction.frequentflyer.services.FrequentFlyerPointsService;
import com.examplcom.manning.bddinaction.frequentflyer.services.PastFlightEligibilityService;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ContextConfiguration
public class EarningPointsStepDefinitions {

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", TestDatabase.getInstance()::getJdbcUrl);
        registry.add("spring.datasource.username", TestDatabase.getInstance()::getUsername);
        registry.add("spring.datasource.password", TestDatabase.getInstance()::getPassword);
    }

    @Given("{} is a {frequentFlyer}")
    public void aFrequentFlyerMember(String name, FrequentFlyerMember member) {
        this.member = member.named(name);
    }


    @Autowired
    PointsScheduleRepository pointsScheduleRepository;

    @Given("the following flight points schedule:")
    public void theFollowingFlightPointsSchedule(List<PointsSchedule> pointsSchedules) {
        pointsScheduleRepository.deleteAll();
        pointsSchedules.forEach(
                schedule -> pointsScheduleRepository.save(schedule)
        );
    }

    @Autowired
    PointsMultiplierRepository pointsMultiplierRepository;

    @Autowired
    FrequentFlyerMemberRepository frequentFlyerMemberRepository;

    @Autowired
    FrequentFlyerPointsService frequentFlyerPointsService;

    @Autowired
    PastFlightEligibilityService pastFlightEligibilityService;

    @And("the following flyer types multipliers:")
    public void theFollowingFlyerTypesMultipliers(List<PointsMultiplier> multipliers) {
        pointsMultiplierRepository.deleteAll();
        multipliers.forEach(
                multiplier -> pointsMultiplierRepository.save(multiplier)
        );
    }

    private FrequentFlyerMember member;

    @When("he/she flies from {} to {} in {cabinClass} class")
    public void sheFliesFromLondonToNewYorkInBusinessClass(String departure,
                                                           String destination,
                                                           CabinClass cabinClass) {
        frequentFlyerPointsService.recordFlight(member, departure, destination, cabinClass);
    }

    @Given("{member} joined the Frequent Flyer programme on {isoDate}")
    public void justJoined(FrequentFlyerMember member, LocalDate joinDate) {
        member.setJoinDate(joinDate);
        this.member = frequentFlyerMemberRepository.save(member);
    }

    @Given("^s?he has been a member for (\\d+) years")
    public void memberFor(int years) {
        this.member.setJoinDate(LocalDate.now().minusYears(years));
    }

    @When("she views her award trips")
    public void sheViewsHerAwardTrips() {
    }

    @Given("{} is a {frequentFlyer} with {int} points")
    public void aFrequentFlyerMemberWithPoints(String name,
                                               FrequentFlyerMember member,
                                               int points) {
        this.member = FrequentFlyerMember.newMember().named(name);
        this.member.setInitialPoints(points);
        frequentFlyerMemberRepository.save(this.member);
    }


    List<PastFlight> eligibleFlights;

    @Then("he/she asks for the following flight to be credited to his account:")
    public void asksForTheFollowingFlightToBeCreditedToHisAccount(List<PastFlight> requestedFlights) {
        eligibleFlights = pastFlightEligibilityService.flightsEligibleFor(member, requestedFlights);
    }

    @Then("only the following flights should be credited:")
    public void onlyTheFollowingFlightsShouldBeCredited(List<PastFlight> expectedEligibleFlights) {
        assertThat(eligibleFlights).hasSameElementsAs(expectedEligibleFlights);
    }

    List<PastFlight> pastFlights;

    @Given("{member} has travelled on the following flight(s):")
    public void travelledOnTheFollowingFlights(FrequentFlyerMember member, List<PastFlight> flights) {
        this.member = frequentFlyerMemberRepository.save(member);
        this.pastFlights = flights;
    }

    @When("the flight is credited to her account")
    public void theFlightIsCreditedToHerAccount() {
        pastFlights.forEach(
                pastFlight -> frequentFlyerPointsService.creditPastFlight(member, pastFlight)
        );
    }

    @Given("{word} is a Frequent Flyer traveller")
    public void createFrequentFlyerNamed(String name) {
        // TODO: Setup the frequent flyer
    }

    @Given("the distance from {} to {} is {int} km")
    public void recordFlightDistance(String departure,
                                     String destination,
                                     int distanceInKm) {
        // TODO: Record trip distance
    }

    @When("he/she completes a flight from {} to {}")
    public void travellerCompletesAFlight(String departure,
                                          String destination) {
        // TODO: Record the flight details
    }

    @Then("he/she should earn {int} points")
    public void shouldEarnPoints(int expectedPoints) {
        // TODO: Check earned points
    }


    @Then("she should be credited with {int} additional points")
    public void sheShouldBeCreditedWith(int extraPoints) {

    }

    @Then("the available destinations should be {cities}")
    public void theAvailableDestinationsShouldBe(List<String> cities) {

    }
}
