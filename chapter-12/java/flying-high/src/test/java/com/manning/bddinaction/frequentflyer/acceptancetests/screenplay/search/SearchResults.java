package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.search;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.TravelClass;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;

import java.util.List;

public class SearchResults {
    public static Question<List<SearchResult>> displayed() {
        return actor -> BrowseTheWeb.as(actor)
                    .findAll(".flight-container")
                    .map(flightContainer -> new SearchResult(
                            flightContainer.findBy(".departure").getText(),
                            flightContainer.findBy(".destination").getText(),
                            flightContainer.findBy(".departure-time").getText(),
                            flightContainer.findBy(".arrival-time").getText(),
                            TravelClass.withLabel(flightContainer.findBy(".travel-class").getText())
                            )
                    );
    }
}
