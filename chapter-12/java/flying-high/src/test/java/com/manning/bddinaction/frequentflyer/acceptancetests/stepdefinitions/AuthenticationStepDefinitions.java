package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersonas;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.login.Login;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.CurrentUser;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.Navigate;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.ensure.Ensure;

import java.util.Map;

public class AuthenticationStepDefinitions {

    Traveller traveller;

    @Given("{actor} is a registered Frequency Flyer member")
    public void frequentFlyerMember(Actor actor) {
        this.traveller = TravellerPersonas.findByName(actor.getName());
    }

    @When("{actor} has logged on with a valid username and password")
    @When("{actor} logs on with a valid username and password")
    public void logsOnWithAValidUsernameAndPassword(Actor actor) {
        actor.attemptsTo(Login.as(traveller));
    }

    @Then("{actor} should be given access to his/her account")
    public void heShouldBeGivenAccessToHisAccount(Actor actor) {
        actor.attemptsTo(
                Ensure.that(CurrentUser.EMAIL).isEqualTo(traveller.getEmail())
        );
    }
}
