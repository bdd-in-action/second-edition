package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersonas;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.account.Account;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.account.AccountStatus;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.login.Login;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.CurrentUser;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegisterAsAFrequentFlyer;
import io.cucumber.java.DataTableType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.ensure.Ensure;

import java.util.Map;

public class RegistrationStepDefinitions {

    Traveller traveller;

    @Given("{actor} does not have a Frequent Flyer account")
    public void frequentFlyerMember(Actor actor) {
        this.traveller = TravellerPersonas.findByName(actor.getName()).withARandomEmail();
    }

    @When("{actor} registers as a Frequent Flyer member")
    public void registersAsAFrequentFlyerMember(Actor actor) {
        actor.attemptsTo(RegisterAsAFrequentFlyer.withMemberDetailsFrom(traveller));
    }

    @When("{actor} should be able to log on to the Frequent Flyer application")
    public void shouldBeAbleToLogInAs(Actor actor) {
        actor.attemptsTo(
                Login.as(traveller),
                Ensure.that(CurrentUser.EMAIL).isEqualTo(traveller.getEmail())
        );
    }

    @DataTableType
    public AccountStatus accountStatus(Map<String, String> statusValues) {
        Integer points = Integer.parseInt(statusValues.get("Points"));
        UserLevel level =  UserLevel.valueOf(statusValues.get("Status Level"));
        return new AccountStatus(level, points);
    }


    @Then("{actor} should have a Frequent Flyer account with:")
    public void shouldBeAbleToLogInAs(Actor actor, AccountStatus accountStatus) {
        actor.attemptsTo(
                Navigate.toMyAccount(),
                Ensure.that(Account.STATUS_LEVEL).isEqualTo(accountStatus.level()),
                Ensure.that(Account.POINT_BALANCE).isEqualTo(accountStatus.points())
        );
    }
}
