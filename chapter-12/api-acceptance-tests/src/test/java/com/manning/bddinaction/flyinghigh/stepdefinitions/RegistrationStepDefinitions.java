package com.manning.bddinaction.flyinghigh.stepdefinitions;

import com.manning.bddinaction.flyinghigh.apis.AuthenticationAPI;
import com.manning.bddinaction.flyinghigh.apis.AuthenticationException;
import com.manning.bddinaction.flyinghigh.apis.EventBusAPI;
import com.manning.bddinaction.flyinghigh.apis.MembershipAPI;
import com.manning.bddinaction.flyinghigh.domain.AuthenticatedUser;
import com.manning.bddinaction.flyinghigh.domain.persona.MembershipTier;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerAccountStatus;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import io.cucumber.java.After;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.*;
import net.thucydides.core.annotations.Steps;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class RegistrationStepDefinitions {

    @ParameterType(".*")
    public MembershipTier tier(String tierLevel) {
        return MembershipTier.valueOf(tierLevel.toUpperCase());
    }

    @ParameterType("activated|pending activation")
    public boolean activationStatus(String activationStatus) {
        return activationStatus.equalsIgnoreCase("activated");
    }

    @Steps
    MembershipAPI membershipAPI;

    @Steps
    EventBusAPI eventBusAPI;

    @Steps
    AuthenticationAPI authenticationAPI;

    /**
     * Here we store all the information about the new Frequent Flyer member
     */
    TravellerRegistration newMember;

    /**
     * The Frequent Flyer number attributed to the new member when they register
     */
    String newFrequentFlyerNumber;
    String emailToken;
    AuthenticatedUser authenticatedUser;

    @Given("{traveller} does not have a Frequent Flyer account")
    public void user_does_not_have_a_frequent_flyer_account(TravellerRegistration traveller) {
        newMember = traveller.withAUniqueEmailAddress();
    }

    @Given("{traveller} has registered for a new Frequent Flyer account")
    public void traveller_has_registered(TravellerRegistration traveller) {
        newMember = traveller.withAUniqueEmailAddress();
        registers_for_a_new_frequent_flyer_account();
    }

    @But("he/she has not yet confirmed her email")
    public void emailNotConfirmed() {
    }

    @When("he/she registers for a new Frequent Flyer account")
    public void registers_for_a_new_frequent_flyer_account() {
        newFrequentFlyerNumber = membershipAPI.register(newMember);
        emailToken = membershipAPI.getEmailToken(newFrequentFlyerNumber);
    }

    @And("he/she confirms her email address")
    public void confirms_email_address() {
        membershipAPI.confirmEmail(newFrequentFlyerNumber, newMember.email(), emailToken);
    }

    @Then("he/she should have a new {tier} tier account with {int} points")
    public void should_have_a_new_account_with_points(MembershipTier tier, Integer points) {
        TravellerAccountStatus accountStatus = membershipAPI.findMemberByFrequentFlyerNumber(newFrequentFlyerNumber);

        assertThat(accountStatus.statusPoints()).isEqualTo(points);
        assertThat(accountStatus.tier()).isEqualTo(tier);
    }

    @Then("he/she should be sent an email with an email validation link")
    public void shouldBeSentAnEmailWithAnEmailValidationLink() {
        assertThat(eventBusAPI.newFrequentFlyerEventWasPublishedFor(newFrequentFlyerNumber)).isTrue();
    }

    @And("his/her account should be {activationStatus}")
    public void accountShouldBe(boolean isActivated) {
        assertThat(membershipAPI.isActivated(newFrequentFlyerNumber)).isEqualTo(isActivated);
    }

    @Then("he/she should not be able to log in")
    public void shouldNotBeAbleToLogIn() {
        assertThatThrownBy(
                () -> authenticationAPI.authenticate(newMember.email(), newMember.password())
        ).isInstanceOf(AuthenticationException.class);
    }

    @Then("he/she should be able to log in")
    public void shouldBeAbleToLogIn() {
        authenticatedUser = authenticationAPI.authenticate(newMember.email(), newMember.password());

        assertThat(authenticatedUser.isActivated()).isTrue();
        assertThat(authenticatedUser.jwtToken()).isNotEmpty();
    }

    @Then("he/she should be invited to first confirm her email address")
    public void needsToConfirmEmailAddress() {
        assertThatThrownBy(
                () -> authenticationAPI.authenticate(newMember.email(), newMember.password())
        ).hasMessageContaining("Please confirm your email address");
    }

    @When("he/she registers with an email of {}")
    public void registersWithAnEmailOfEmail(String email) {
        newMember = newMember.withEmail(email);
        membershipAPI.register(newMember);
    }

    @Then("the email address should be: {acceptedOrRejected}")
    public void theEmailAddressShouldBeAcceptedAccepted(boolean accepted) {
    }

    @After
    public void deleteFrequentFlyerAccount() {
        if (newFrequentFlyerNumber != null) {
            membershipAPI.deleteFrequentFlyer(newFrequentFlyerNumber);
        }
    }
}
