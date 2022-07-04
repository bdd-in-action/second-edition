package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersona;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.login.Login;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.OpenTheApplicationOn;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegisterAsAFrequentFlyer;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegistrationForm;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.But;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Iterate;
import net.serenitybdd.screenplay.actions.Clear;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.type.Type;
import net.serenitybdd.screenplay.ensure.Ensure;
import net.serenitybdd.screenplay.ensure.SoftlyEnsure;
import net.serenitybdd.screenplay.questions.Text;
import net.serenitybdd.screenplay.ui.PageElement;
import net.serenitybdd.screenplay.waits.WaitUntil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import static com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegistrationForm.EMAIL;
import static com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegistrationForm.REGISTER;
import static net.serenitybdd.screenplay.actors.OnStage.theActorCalled;
import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isVisible;
import static org.assertj.core.api.Assertions.assertThat;

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
    public void notAFrequentFlyerMember(Traveller traveller) {
        // This new member account has an email address that has never been used before
        newMember = traveller.withAUniqueEmailAddress();
        theActorCalled(traveller.firstName()).describedAs("A new Frequent Flyer");
    }

    @When("{actor} registers as a Frequent Flyer member")
    public void registersAsAFrequentFlyerMember(Actor traveller) {
        traveller.attemptsTo(
                RegisterAsAFrequentFlyer.withMemberDetailsFrom(newMember)
        );
    }

    @Then("{actor} should be able to log on to the Frequent Flyer application")
    public void shouldBeAbleToLoginAs(Actor member) {
        member.attemptsTo(
                Login.as(newMember)
        );
    }

    @Then("{actor} logs on to the Frequent Flyer application")
    public void loginAs(Actor actor) {
        actor.attemptsTo(
                Login.as(newMember)
        );
    }

    @When("{actor} wants to register a new Frequent Flyer account")
    public void triesToRegisterANewAccount(Actor actor) {
        actor.attemptsTo(Navigate.toTheRegistrationPage());
    }

    @When("{actor} wants to register a new Frequent Flyer account with an email of {}")
    public void triesToRegisterANewAccountWithEmail(Actor actor, String email) {
        actor.attemptsTo(
                Navigate.toTheRegistrationPage(),
                Clear.field(RegistrationForm.EMAIL),
                Type.theValue(email).into(RegistrationForm.EMAIL),
                Click.on(RegistrationForm.REGISTER)
        );
    }

    @Given("{actor} has registered as a Frequent Flyer member")
    public void hasRegisteredAsAFrequentFlyerMember(Actor actor) {
        newMember = TravellerPersona.withName(actor.getName()).withAUniqueEmailAddress();
        actor.attemptsTo(
                RegisterAsAFrequentFlyer.viaTheAPI().withMemberDetailsFrom(newMember)
        );
        actor.attemptsTo(RegisterAsAFrequentFlyer.usingTheirUsernameAndEmailAddress());
    }

    @When("{actor} tries to register with the same email")
    public void triesToRegisterWithTheSameEmail(Actor actor) {
        String existingEmail = newMember.email();
        Traveller travellerWithADuplicatedEmail = TravellerPersona.withName(actor.getName()).withEmail(existingEmail);
        actor.attemptsTo(
                RegisterAsAFrequentFlyer.withMemberDetailsFrom(travellerWithADuplicatedEmail)
        );
    }

    @When("{actor} tries to register with an email of {string}")
    public void triesToRegisterWithAUsernameOf(Actor actor, String email) {
        actor.attemptsTo(
                // Override the default traveller properties with a different email
                RegisterAsAFrequentFlyer.withMemberDetailsFrom(
                        newMember.withEmail(email)
                )
        );
    }

    @When("{actor} provides an email of {string}")
    public void providesEmail(Actor actor, String email) {
        actor.attemptsTo(
                // Override the default traveller properties with a different email
                OpenTheApplicationOn.theRegistrationPage(),
                Enter.theValue(email).into(EMAIL),
                // Submit the registration
                Click.on(REGISTER)
        );
    }

    @Then("{actor} should be told {string}")
    public void shouldBeTold(Actor actor, String errorMessage) {
        actor.attemptsTo(
                Ensure.that(RegistrationForm.FORM_ERROR_MESSAGES).textValues().contains(errorMessage)
        );
    }

    @Then("{actor} should be notified that {string}")
    public void shouldBeNotified(Actor actor, String errorMessage) {
        actor.attemptsTo(
                WaitUntil.the(RegistrationForm.ERROR_NOTIFICATION_MESSAGE, isVisible()),
                Ensure.that(RegistrationForm.ERROR_NOTIFICATION_MESSAGE).hasTextContent(errorMessage)
        );
    }

    @Then("{actor} should be told that the field is mandatory and informed that {string}")
    public void shouldBeNotifiedOfMandatoryFieldMessage(Actor actor, String errorMessage) {
        actor.attemptsTo(
                WaitUntil.the(RegistrationForm.FORM_ERROR_MESSAGES, isVisible()),
                Ensure.that(RegistrationForm.FORM_ERROR_MESSAGES).hasTextContent(errorMessage)
        );
    }

    @When("{actor} tries to register without approving the terms and conditions")
    public void triesToRegisterWithoutApprovingTheTermsAndConditions(Actor actor) {
        actor.attemptsTo(
                RegisterAsAFrequentFlyer.withMemberDetailsFrom(
                        newMember.whoDoesNotApproveTheTermsAndConditions()
                )
        );
    }

    @But("{actor} doesn't provide a value for {word}")
    public void sheDoesnTProvideAValueForField(Actor actor, String field) {
        actor.attemptsTo(
                RegisterAsAFrequentFlyer.withMemberDetailsFrom(
                        newMember.withEmptyValueFor(field)
                )
        );
    }
}
