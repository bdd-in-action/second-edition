package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration;

import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.serenitybdd.screenplay.questions.Text;
import net.serenitybdd.screenplay.targets.Target;

import java.util.Collection;

public class RegistrationForm {
    public static final Target EMAIL = Target.the("Email field").locatedBy("#email");
    public static final Target PASSWORD = Target.the("Password field").locatedBy("#password");
    public static final Target FIRSTNAME = Target.the("First name field").locatedBy("#firstName");
    public static final Target LASTNAME = Target.the("Last name field").locatedBy("#lastName");
    public static final Target ADDRESS = Target.the("Address field").locatedBy("#address");
    public static final Target COUNTRY = Target.the("Country field").locatedBy("#country");
    public static final Target TITLE = Target.the("Title dropdown").locatedBy("#title");
    public static final Target SEAT_PREFERENCE = Target.the("Seat preference").locatedBy("css:label[for='{0}']");
    public static final Target TERMS_AND_CONDITIONS = Target.the("Terms and conditions").locatedBy("#terms");
    public static final Target REGISTER = Target.the("Register button").locatedBy("//button[.='Register']");
    public static final Target FORM_ERROR_MESSAGES = Target.the("Error messages").locatedBy("css:mat-error");
    public static final Target ERROR_NOTIFICATION_MESSAGE = Target.the("Error message").locatedBy(".toast-error");

}
