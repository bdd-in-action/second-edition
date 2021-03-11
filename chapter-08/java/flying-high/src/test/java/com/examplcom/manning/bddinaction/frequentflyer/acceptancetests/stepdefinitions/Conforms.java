package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.SilentTask;

public class Conforms {
    public static Performable theApplicationDetails() {
        return SilentTask.where();
    }
}
