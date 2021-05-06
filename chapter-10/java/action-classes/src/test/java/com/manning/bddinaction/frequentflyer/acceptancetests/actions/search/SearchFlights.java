package com.manning.bddinaction.frequentflyer.acceptancetests.actions.search;

import com.manning.bddinaction.frequentflyer.acceptancetests.actions.navigation.Navigate;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import net.serenitybdd.core.steps.UIInteractionSteps;
import net.thucydides.core.annotations.Steps;

public class SearchFlights extends UIInteractionSteps {

    @Steps
    Navigate navigate;
    SearchForm searchForm;

    public SearchFlights from(String departure) {
        navigate.toTheBookFlightsPage();
        searchForm.setDeparture(departure);
        return this;
    }

    public SearchFlights to(String destination) {
        searchForm.setDestination(destination);
        return this;
    }

    public SearchFlights inTravelClass(TravelClass travelClass) {
        searchForm.setTravelClass(travelClass);
        return this;
    }

    public void andViewResults() {
        searchForm.submitSearch();
    }
}
