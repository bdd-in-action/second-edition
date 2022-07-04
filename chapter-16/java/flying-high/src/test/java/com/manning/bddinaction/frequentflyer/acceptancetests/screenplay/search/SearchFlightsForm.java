package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search;

import net.serenitybdd.screenplay.targets.Target;

public class SearchFlightsForm {
    public static final Target FROM = Target.the("From field").locatedBy("#departure");
    public static final Target TO = Target.the("To field").locatedBy("#arrival");
    public static final Target TRAVEL_CLASS = Target.the("Travel Class dropdown").locatedBy("#travel-class");
    public static final Target SEARCH_BUTTON = Target.the("Search button").locatedBy("#search-button");
    public static final Target RETURN_DATE = Target.the("Return date").locatedBy("#return-datepicker");
}
