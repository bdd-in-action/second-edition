package com.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions.usingpageobjects;

import com.manning.bddinaction.frequentflyer.acceptancetests.actions.search.FieldsWithErrors;
import com.manning.bddinaction.frequentflyer.acceptancetests.actions.search.SearchFlights;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FlightSearch;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona.TravelClass;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.MatchingFlightsList;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.MenuBar;
import com.manning.bddinaction.frequentflyer.acceptancetests.pageobjects.SearchForm;
import io.cucumber.java.DataTableType;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

public class SearchStepDefinitions {

    SearchForm searchForm;

    @DataTableType
    public FlightSearch searchCriteria(Map<String, String> searchCriteria) {
        return new FlightSearch(
                emptyStringIfNull(searchCriteria.get("From")),
                emptyStringIfNull(searchCriteria.get("To")),
                TravelClass.withLabel(emptyStringIfNull(searchCriteria.get("Travel Class"))),
                false);
    }

    @ParameterType("Economy|Premium Economy|Business")
    public TravelClass travelClass(String value) {
        return TravelClass.withLabel(value);
    }

    private String emptyStringIfNull(String value) {
        return value == null ? "" : value;
    }

    @When("she/he tries to search for flights with the following criteria")
    public void searchBy(FlightSearch search) {
        searchFlights.from(search.from())
                     .to(search.to())
                     .inTravelClass(search.travelClass());
    }

    @Steps
    SearchFlights searchFlights;

    @Steps
    MatchingFlightsList matchingFlightsList;

    @When("she/he searches for flights with the following criteria")
    public void performSearch(FlightSearch search) {
        searchFlights.from(search.from())
                .to(search.to())
                .inTravelClass(search.travelClass())
                .andViewResults();
    }

    @Then("the returned flights should match the travel class {travelClass}")
    public void shouldMatchTravelClass(TravelClass expectedClass) {
        assertThat(matchingFlightsList.matchingFlights())
                .isNotEmpty()
                .allMatch(flight -> flight.travelClass() == expectedClass,
                          "should have a travel class of " + expectedClass
        );
    }

    @ParameterType("Yes|No")
    public Boolean yesNo(String value) {
        return value.equalsIgnoreCase("Yes");
    }

    @Then("the search should be allowed")
    public void searchShouldBeAllowed() {
        searchShouldBeAllowed(true);
    }

    @Then("the search should not be allowed")
    public void searchShouldNotBeAllowed() {
        assertThat(searchForm.searchIsEnabled()).isFalse();
    }

    @Steps
    FieldsWithErrors fieldsWithErrors;

    @Then("the {} field should be highlighted as missing")
    public void missingField(String missingField) {
        assertThat(fieldsWithErrors.currentlyVisible()).containsExactly(missingField);
    }

    private void searchShouldBeAllowed(Boolean isAllowed) {

        assertThat(searchForm.searchIsEnabled())
                .withFailMessage("Expecting the search button to be " + enabledOrDisabled(isAllowed))
                .isEqualTo(isAllowed);
    }

    private String enabledOrDisabled(Boolean isEnabled) {
        return (isEnabled) ? "enabled" : "disabled";
    }
}
