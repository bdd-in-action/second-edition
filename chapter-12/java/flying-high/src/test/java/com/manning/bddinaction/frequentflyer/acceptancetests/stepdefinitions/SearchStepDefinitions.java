package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FlightSearch;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.TravelClass;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search.SearchFlights;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search.SearchResult;
import com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search.SearchResults;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.serenitybdd.screenplay.Actor;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class SearchStepDefinitions {

    @When("{actor} searches for flights with the following criteria")
    public void performSearch(Actor traveler, FlightSearch searchCriteria) {
        traveler.attemptsTo(
                SearchFlights.matching(searchCriteria)
        );
    }

    @Then("{actor} should be shown flights that match the travel class {travelClass}")
    public void shouldMatchTravelClass(Actor actor, TravelClass expectedClass) {
        List<SearchResult> searchResults = actor.asksFor(SearchResults.displayed());
        assertThat(searchResults)
                .isNotEmpty()
                .allMatch( searchResult -> searchResult.travelClass() == expectedClass);
    }
}
