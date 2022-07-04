package com.manning.bddinaction.frequentflyer.acceptancetests.actions.authentication;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FrequentFlyer;
import net.thucydides.core.annotations.Step;

public class Login {

    LoginForm loginForm;

    @Step("Login as {0}")
    public void as(FrequentFlyer frequentFlyer) {
        loginForm.open();
        loginForm.enterCredentials(frequentFlyer.email, frequentFlyer.password);
        loginForm.submit();
    }
}
