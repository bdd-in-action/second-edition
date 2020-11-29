package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.model.Traveller;
import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.model.TravellerPersonas;
import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.navigation.Navigate;
import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.registration.Confirms;
import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.registration.EnterRegistrationDetails;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;

public class RegistrationStepDefinitions {

    Traveller travellerDetails;

    @Given("{} is not a Frequent Flyer member")
    public void notAFrequentFlyer(String name) {
        travellerDetails = TravellerPersonas.withName(name);
    }


    @When("{actor} registers for a new account")
    public void registersForANewAccount(Actor theTraveller) {
        theTraveller.attemptsTo(
                Navigate.toTheFrequentFlyerRegistrationPage(),
                EnterRegistrationDetails.using(travellerDetails),
                Confirms.termsAndConditions()
        );
    }

    @When("{actor} has applied for car insurance")
    public void claim(Actor theTraveller) {


        theTraveller.attemptsTo(
                Navigate.toTheFrequentFlyerRegistrationPage(),
                EnterRegistrationDetails.using(travellerDetails),
                Confirms.termsAndConditions()
        );
    }


    @Then("she should be sent a confirmation email")
    public void sheShouldBeSentAConfirmationEmail() {

    }

    @And("she should receive {int} bonus points")
    public void sheShouldReceiveBonusPoints(int bonusPoints) {

    }

}
