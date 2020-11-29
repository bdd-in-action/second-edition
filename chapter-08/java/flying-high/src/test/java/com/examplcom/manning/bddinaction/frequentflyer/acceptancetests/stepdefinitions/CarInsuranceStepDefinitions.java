package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.model.Traveller;
import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.automobile.*;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.actors.OnStage;
import net.serenitybdd.screenplay.actors.OnlineCast;

public class CarInsuranceStepDefinitions {

    Traveller travellerDetails;

    @Before
    public void setTheStage() {
        OnStage.setTheStage(new OnlineCast());
    }

    DriverDetails driverDetails;


    @Given("{actor} owns a {newOrUsed} {word} {}")
    public void ownsACar(Actor theCustomer,
                         NewOrUsed newOrUsed,
                         String make,
                         String model) {
        driverDetails = DriverPersonas.withName(theCustomer.getName())
                                      .withVehicle(Vehicle.thatIs(newOrUsed)
                                                           .ofMake(make)
                                                           .ofModel(model));
    }

    @Given("{actor} wants to insure his/her car")
    public void wantsToInsureHerCar(Actor theCustomer) {
        driverDetails = DriverPersonas.withName(theCustomer.getName());
        theCustomer.attemptsTo(
                ApplyForAutomobileInsurance.forASingleCar()
        );
    }

    @And("{actor} has had {int} accidents in the past 3 years")
    public void numberOfAccidentsAccidents(Actor theCustomer, int numberOfAccidents) {
        driverDetails = driverDetails.withAccidentCount(numberOfAccidents);
    }

    @When("{actor} applies for comprehensive car insurance")
    public void appliesForComprehensiveCarInsurance(Actor theDriver) {
        theDriver.attemptsTo(
                ApplyForAutomobileInsurance.forASingleCar(),
                ProvideDetails.from(driverDetails).aboutTheirCar(),
                ProvideDetails.from(driverDetails).aboutThemselves(),
                Conforms.theApplicationDetails()
        );
    }

    @Then("the <Accident Premium Rate> accident premium rate should be applied")
    public void theAccidentPremiumRateAccidentPremiumRateShouldBeApplied() {
    }

    @And("{actor} has had <Number of accidents> accidents in the past {int} years")
    public void janeHasHadAccidentsAccidentsInThePastYears(Actor driver, int accidents) {
    }

    @Then("the {int}% accident premium rate should be applied")
    public void theAccidentPremiumRateShouldBeApplied(int expectedRate) {

    }

    @Then("{actor} should be shown a {} quote")
    public void shouldBeShownAQuote(Actor actor, String quoteType) {
    }

    @And("{actor} should receive a copy of the quote via email")
    public void shouldReceiveACopyOfTheQuoteViaEmail(Actor actor) {
    }
}
