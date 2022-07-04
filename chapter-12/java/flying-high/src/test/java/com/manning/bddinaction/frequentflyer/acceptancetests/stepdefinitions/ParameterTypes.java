package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FlightSearch;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.TravelClass;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravellerPersonas;
import io.cucumber.java.Before;
import io.cucumber.java.DataTableType;
import io.cucumber.java.ParameterType;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.actors.OnStage;
import net.serenitybdd.screenplay.actors.OnlineCast;

import java.util.Map;

public class ParameterTypes {

    @Before
    public void setTheStage() {
        OnStage.setTheStage(new OnlineCast());
    }

    @ParameterType(".*")
    public Actor actor(String actorName) {
        return OnStage.theActorCalled(actorName);
    }

    @ParameterType(".*")
    public Traveller traveller(String travellerName) {
        return TravellerPersonas.findByName(travellerName);
    }

    @DataTableType
    public FlightSearch searchCriteria(Map<String, String> searchCriteria) {
        return new FlightSearch(
                emptyStringIfNull(searchCriteria.get("From")),
                emptyStringIfNull(searchCriteria.get("To")),
                TravelClass.withLabel(emptyStringIfNull(searchCriteria.get("Travel Class"))),
                false);
    }

    @ParameterType("Economy|Premium Economy|Business")
    public TravelClass travelClass(String value) {
        return TravelClass.withLabel(value);
    }

    private String emptyStringIfNull(String value) {
        return value == null ? "" : value;
    }

}
