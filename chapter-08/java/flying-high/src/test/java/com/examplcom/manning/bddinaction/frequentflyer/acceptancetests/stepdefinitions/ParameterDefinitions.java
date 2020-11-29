package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.automobile.NewOrUsed;
import io.cucumber.java.ParameterType;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.actors.OnStage;

public class ParameterDefinitions {

    @ParameterType(".*")
    public Actor actor(String actorName) {
        return OnStage.theActorCalled(actorName);
    }

    @ParameterType("new|used")
    public NewOrUsed newOrUsed(String newOrUsedValue) {
        return NewOrUsed.valueOf(newOrUsedValue.toUpperCase());
    }


}