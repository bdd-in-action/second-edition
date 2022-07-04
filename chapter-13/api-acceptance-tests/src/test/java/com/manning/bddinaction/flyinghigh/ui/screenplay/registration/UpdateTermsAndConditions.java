package com.manning.bddinaction.flyinghigh.ui.screenplay.registration;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.conditions.Check;

import static com.manning.bddinaction.flyinghigh.ui.screenplay.registration.RegistrationForm.TERMS_AND_CONDITIONS;

public class UpdateTermsAndConditions {
    public static Performable to(boolean agreesToTermsAndConditions) {
        return Check.whether(agreesToTermsAndConditions).andIfSo(
                Click.on(TERMS_AND_CONDITIONS)
        );
    }
}
