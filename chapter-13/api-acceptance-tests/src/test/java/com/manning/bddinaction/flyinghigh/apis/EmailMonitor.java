package com.manning.bddinaction.flyinghigh.apis;

import net.thucydides.core.annotations.Step;

public class EmailMonitor {

    EventBusAPI eventBusAPI = new EventBusAPI();

    @Step("A new account confirmation message was sent to {0}")
    public boolean newAccountConfirmationMessageSentTo(String email) {
        return eventBusAPI.newFrequentFlyerEventWasPublishedFor(email);
    }
}
