package com.manning.bddinaction.flyinghigh.ui.screenplay.ux;

import net.serenitybdd.screenplay.targets.Target;

/**
 * Toastr notification messages
 */
public class Notification {
    public static final Target OF_SUCCESS = Target.the("Success message").locatedBy(".toast-success");
}
