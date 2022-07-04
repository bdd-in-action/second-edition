package com.manning.bddinaction.frequentflyer.acceptancetests.actions.authentication;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FrequentFlyer;
import net.serenitybdd.core.steps.UIInteractionSteps;
import net.thucydides.core.annotations.Step;

/**
 * Return information about the currently connected user.
 */
public class CurrentUser extends UIInteractionSteps {
    /**
     * Checks whether the specified user is currently logged on
     */
    public boolean isConnectedAs(FrequentFlyer frequentFlyer) {
        return frequentFlyer.email.equals(textOf("#current-user"));
    }
}
