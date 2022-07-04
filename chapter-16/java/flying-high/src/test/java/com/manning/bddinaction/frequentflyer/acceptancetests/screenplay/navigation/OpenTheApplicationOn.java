    package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Open;

/**
 * Open the application directly on a given page, without passing via the home page.
 */
public class OpenTheApplicationOn {
    public static Performable theRegistrationPage() {
        return Task.where("",Open.browserOn().thePageNamed("pages.registration"));
    }

    public static Performable theMyAccountPage() {
        return Task.where("",Open.browserOn().thePageNamed("pages.my.accounts"));
    }

    public static Performable theMyBookingsPage() {
        return Task.where("",Open.browserOn().thePageNamed("pages.my.bookings"));
    }

    public static Performable theBookFlightsPage() {
        return Task.where("",Open.browserOn().thePageNamed("pages.search"));
    }
}
