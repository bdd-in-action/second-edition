package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation;

import net.serenitybdd.screenplay.targets.Target;

class MenuBar {
    private static final Target BUTTON = Target.the("{0} button").locatedBy("//button[contains(.,'{0}')]");

    static final Target LOGIN_BUTTON = BUTTON.of("Login");
    static final Target MY_ACCOUNT = BUTTON.of("My Account");
    static final Target REGISTER = BUTTON.of("Register");
    static final Target BOOK_FLIGHTS = BUTTON.of("Book Flights");

    static final Target CURRENT_USER = Target.the("Current user").locatedBy("#current-user");

}
