package com.manning.bddinaction.flyinghigh.stepdefinitions;

import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistrationConfig;
import io.cucumber.java.Before;
import io.cucumber.java.ParameterType;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.actors.OnStage;
import net.serenitybdd.screenplay.actors.OnlineCast;

public class ParameterDefinitions {

    @ParameterType(".*")
    public Actor actor(String actorName) {
        return OnStage.theActorCalled(actorName);
    }

    /**
     * Travellers are defined in the src/test/resources/testdata/travellers.conf file
     * @param travellerName
     * @return a TravellerRegistration object representing the named traveller
     */
    @ParameterType(".*")
    public TravellerRegistration traveller(String travellerName) {
        return TravellerRegistrationConfig.forTravellerNamed(travellerName);
    }

    @Before
    public void setTheStage() {
        OnStage.setTheStage(new OnlineCast());
    }
}
