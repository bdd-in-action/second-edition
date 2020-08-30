package com.manning.bddinaction.frequentflyer.stepdefinitions;

import io.cucumber.java.fr.Alors;
import io.cucumber.java.fr.Etantdonnéque;
import io.cucumber.java.fr.Quand;

public class FrenchStepDefinitions {

    @Etantdonnéque("Tara est un member du programme Frequent Flyer")
    public void tara_est_un_member_du_programme_frequent_flyer() {
        // Write code here that turns the phrase above into concrete actions
    }

    @Quand("elle complete un vol entre Paris and Berlin")
    public void elle_complete_un_vol_entre_paris_and_berlin() {
        // Write code here that turns the phrase above into concrete actions
    }

    @Alors("elle devrait gagner {int} points")
    public void elle_devrait_gagner_points(Integer int1) {
        // Write code here that turns the phrase above into concrete actions
    }

}
