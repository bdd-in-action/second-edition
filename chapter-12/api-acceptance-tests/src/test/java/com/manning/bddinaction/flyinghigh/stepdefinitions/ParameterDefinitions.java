package com.manning.bddinaction.flyinghigh.stepdefinitions;

import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import com.manning.bddinaction.flyinghigh.domain.persona.TravellerPersona;
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
     * Travellers are defined
     * @param travellerName
     * @return
     */
    @ParameterType(".*")
    public TravellerRegistration traveller(String travellerName) {
        return TravellerPersona.withName(travellerName);
    }

    @ParameterType("(Accepted|Rejected)")
    public boolean acceptedOrRejected(String value) {
        return value.equalsIgnoreCase("Accepted");
    }

    @Before
    public void setTheStage() {
        OnStage.setTheStage(new OnlineCast());
    }
}
