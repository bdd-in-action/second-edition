package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.login;

import net.serenitybdd.screenplay.targets.Target;

class LoginForm {
    static final Target EMAIL = Target.the("Email field").locatedBy("#email");
    static final Target PASSWORD = Target.the("Password field").locatedBy("#password");
    static final Target LOGIN_BUTTON = Target.the("Login button").locatedBy("#login-button");
}
