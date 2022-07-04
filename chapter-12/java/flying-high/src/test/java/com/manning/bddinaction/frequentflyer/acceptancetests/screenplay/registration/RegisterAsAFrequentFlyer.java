package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.navigation.OpenTheApplicationOn;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.ux.SelectDropdown;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import org.openqa.selenium.Keys;

import static com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.registration.RegistrationForm.*;

/**
 * The registration page is defined in the serenity.conf file, in the `pages.registration` property.
 */
public class RegisterAsAFrequentFlyer {
    public static Performable withMemberDetailsFrom(Traveller memberDetails) {
        return Task.where("{0} registers for a new Frequent Flyer account with email " + memberDetails.getEmail(),
                // Open the registraton page
                OpenTheApplicationOn.theRegistrationPage(),

                // Complete the registration form
                Enter.theValue(memberDetails.getEmail()).into(EMAIL),
                Enter.theValue(memberDetails.getPassword()).into(PASSWORD),
                Enter.theValue(memberDetails.getFirstName()).into(FIRSTNAME),
                Enter.theValue(memberDetails.getLastName()).into(LASTNAME),
                Enter.theValue(memberDetails.getAddress()).into(ADDRESS),
                Enter.theValue(memberDetails.getCountry()).into(COUNTRY).thenHit(Keys.TAB),
                SelectDropdown.option(memberDetails.getTitle()).from(TITLE),
                Click.on(SEAT_PREFERENCE.of(memberDetails.getSeatPreference())),
                UpdateTermsAndConditions.basedOn(true),

                // Submit the registration
                Click.on(REGISTER)
        );
    }
}
