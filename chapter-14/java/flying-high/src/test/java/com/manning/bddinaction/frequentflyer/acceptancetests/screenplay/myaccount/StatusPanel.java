package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.myaccount;

import net.serenitybdd.screenplay.targets.Target;

public class StatusPanel {
    public static final Target POINT_BALANCE = Target.the("Point balance").locatedBy("[test-dataid='point-balance']");
    public static final Target STATUS_LEVEL = Target.the("Status level").locatedBy("[test-dataid='status-level']");
}
