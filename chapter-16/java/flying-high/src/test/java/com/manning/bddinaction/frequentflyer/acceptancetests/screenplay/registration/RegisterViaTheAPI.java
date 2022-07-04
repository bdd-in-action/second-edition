package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.api.UserAPI;
import net.serenitybdd.markers.IsSilent;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.thucydides.core.annotations.Steps;

import java.time.Duration;

/**
 * Create a new user via the API.
 * We wrap a simple Rest Assured call in a Performable, as we are using the API to setup test data, not testing the API itself.
 * The actor remembers the user details as CURRENT_USER
 */
public class RegisterViaTheAPI implements Performable, IsSilent {
    private Traveller memberDetails;

    public Performable withMemberDetailsFrom(Traveller memberDetails) {
        this.memberDetails = memberDetails;
        return this;
    }

    @Steps

    private UserAPI userAPI;

    @Override
    public <T extends Actor> void performAs(T actor) {
        String userId = userAPI.createNewUser(memberDetails);
        actor.remember("CURRENT_USER",memberDetails.withId(userId));
    }
}
