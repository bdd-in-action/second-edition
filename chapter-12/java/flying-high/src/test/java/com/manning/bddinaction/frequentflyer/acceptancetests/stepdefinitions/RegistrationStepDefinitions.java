package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersonas;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.account.Account;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.account.AccountStatus;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.login.Login;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.CurrentUser;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.OpenTheApplicationOn;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegisterAsAFrequentFlyer;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.DataTableType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.ensure.Ensure;
import net.serenitybdd.screenplay.ensure.SoftlyEnsure;
import net.serenitybdd.screenplay.questions.Text;
import org.assertj.core.api.SoftAssertions;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import static com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegistrationForm.ERROR_MESSAGE;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class RegistrationStepDefinitions {

    Traveller traveller;

    @Given("{actor} does not have a Frequent Flyer account")
    public void frequentFlyerMember(Actor actor) {
        this.traveller = TravellerPersonas.findByName(actor.getName()).withARandomEmail();
    }

    @When("{actor} wants to register as a Frequent Flyer member")
    public void wantsToRegisterAs(Actor actor) {
        actor.attemptsTo(OpenTheApplicationOn.theRegistrationPage());
    }

    @Then("the following information should be mandatory:")
    public void mandatoryFields(List<Map<String, String>> mandatoryFields) {
        Actor actor = theActorInTheSpotlight();

        SoftAssertions softly = new SoftAssertions();
        mandatoryFields.forEach(
                entry -> {
                    actor.attemptsTo(RegisterAsAFrequentFlyer.withMemberDetailsFrom(traveller.withAnEmptyValueFor(entry.get("Field"))));
                    Collection<String> errorMessages = actor.asksFor(Text.ofEach(ERROR_MESSAGE));
                    softly.assertThat(errorMessages).contains(entry.get("Error Message If Missing"));
                }
        );
        softly.assertAll();
    }

    @When("{actor} should be able to log on to the Frequent Flyer application")
    public void shouldBeAbleToLogInAs(Actor actor) {
        actor.attemptsTo(
                Login.as(traveller),
                Ensure.that(CurrentUser.EMAIL).isEqualTo(traveller.getEmail())
        );
    }

    @When("{actor} registers as a Frequent Flyer member")
    public void registersAsAFrequentFlyerMember(Actor actor) {
        actor.attemptsTo(RegisterAsAFrequentFlyer.withMemberDetailsFrom(traveller));
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
