package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.myaccount;

import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;

public class FlightHistoryPanel {
    public static final Target FLIGHT_HISTORY_RECORDS = Target.the("Flight history records").locatedBy("#flight-history tbody tr");
    public static final By BOOKINGS = By.cssSelector("#flight-history tbody tr");
    public static final By DEPARTURE = By.cssSelector(".cdk-column-departure");
    public static final By DESTINATION = By.cssSelector(".cdk-column-destination");
    public static final By POINTS_EARNED = By.cssSelector(".cdk-column-pointsEarned");
}
