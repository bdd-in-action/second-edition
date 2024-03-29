package com.manning.bddinaction.flyinghigh.ui.screenplay.registration;

import com.manning.bddinaction.flyinghigh.domain.persona.TravellerRegistration;
import com.manning.bddinaction.flyinghigh.ui.screenplay.navigation.OpenTheApplicationOn;
import com.manning.bddinaction.flyinghigh.ui.screenplay.ux.SelectDropdown;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import org.openqa.selenium.Keys;

import static com.manning.bddinaction.flyinghigh.ui.screenplay.registration.RegistrationForm.*;

/**
 * The registration page is defined in the serenity.conf file, in the `pages.registration` property.
 */
public class CompleteRegistrationForm {
    public static Performable withMemberDetailsFrom(TravellerRegistration memberDetails) {
        return Task.where("{0} registers for a new Frequent Flyer account with email " + memberDetails.email(),
                // Open the registraton page
                OpenTheApplicationOn.theRegistrationPage(),

                // Complete the registration form
                Enter.theValue(memberDetails.email()).into(EMAIL),
                Enter.theValue(memberDetails.password()).into(PASSWORD),
                Enter.theValue(memberDetails.firstName()).into(FIRSTNAME),
                Enter.theValue(memberDetails.lastName()).into(LASTNAME),
                Enter.theValue(memberDetails.address()).into(ADDRESS),
                Enter.theValue(memberDetails.country()).into(COUNTRY).thenHit(Keys.TAB),
                SelectDropdown.option (memberDetails.title()).from(TITLE),
                Click.on(SEAT_PREFERENCE.of("window")),
                UpdateTermsAndConditions.to(true)
        );
    }
//
//    /**
//     * Since this is a static factory method, we need to create an instrumented version of the API object
//     * that includes the API dependencies it needs to work.
//     */
//    public static RegisterViaTheAPI viaTheAPI() {
//        return Instrumented.instanceOf(RegisterViaTheAPI.class).newInstance();
//    }
//
//    public static Performable usingTheirUsernameAndEmailAddress() {
//        return Task.where("{0} registers using username and email",
//                actor -> {
//                    Traveller memberDetails = TravellerPersona.withName(actor.getName());
//                    actor.attemptsTo(
//                            OpenTheApplicationOn.theRegistrationPage(),
//                            // Enter credentials
//                            Enter.theValue(memberDetails.email()).into(EMAIL),
//                            Enter.theValue(memberDetails.password()).into(PASSWORD),
//
//                            // Enter personal details
//                            Enter.theValue(memberDetails.firstName()).into(FIRSTNAME),
//                            Enter.theValue(memberDetails.lastName()).into(LASTNAME),
//                            Enter.theValue(memberDetails.address()).into(ADDRESS),
//                            Enter.theValue(memberDetails.country()).into(COUNTRY).thenHit(Keys.TAB),
//
//                            // Enter personal preferences
//                            SelectFromDropdown.locatedBy(TITLE).selectingOption(memberDetails.title()),
//                            Click.on(SEAT_PREFERENCE.of(memberDetails.seatPreference())),
//
//                            // Accept terms and conditions
//                            UpdateTermsAndConditions.basedOn(memberDetails.agreesToTermsAndConditions()),
//
//                            // Submit the registration
//                            Click.on(REGISTER)
//                    );
//                }
//        );
//    }
}
