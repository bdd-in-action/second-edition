package com.manning.bddinaction.frequentflyer.acceptancetests.actions.registration;

import com.manning.bddinaction.frequentflyer.acceptancetests.actions.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.Traveller;
import net.serenitybdd.core.steps.UIInteractionSteps;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;

public class Register extends UIInteractionSteps {

    @Steps
    Navigate navigate;

    RegistrationForm registrationForm;

    @Step("Register as {0}")
    public void as(Traveller traveller) {
        navigate.toTheRegisitrationPage();
        registrationForm.setEmail(traveller.getEmail());
        registrationForm.setPassword(traveller.getPassword());
        registrationForm.setFirstname(traveller.getFirstName());
        registrationForm.setLastname(traveller.getLastName());
        registrationForm.setCountry(traveller.getCountry());
        registrationForm.setAddress(traveller.getAddress());
        registrationForm.agreeToTermsAndConditions();;
        registrationForm.submit();
    }
}
