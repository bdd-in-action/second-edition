package manning.bddinaction.steps;

import io.cucumber.java.ParameterType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import manning.bddinaction.itineraries.ItineraryService;
import manning.bddinaction.timetables.InMemoryTimeTable;
import manning.bddinaction.timetables.TimeTable;

import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static org.assertj.core.api.Assertions.assertThat;

public class DepartingTrainsStepDefinitions {

    InMemoryTimeTable timeTable = new InMemoryTimeTable();
    ItineraryService itineraryService = new ItineraryService(timeTable);

    @Given("the {line} train to {station} leaves {station} at {departureTimes}")
    public void theTrainLeavesAt(String line,
                                 String to,
                                 String from,
                                 List<LocalTime> departureTimes) {
        timeTable.scheduleService(line, departureTimes, from, to);
    }

    List<LocalTime> proposedDepartures;

    @When("Travis want to travel from {station} to {station} at {departureTime}")
    public void travelBetween(String from, String to, LocalTime departureTime) {
        proposedDepartures = itineraryService.findNextDepartures(departureTime,
                from,
                to);
    }

    @Then("he should be told about the trains at: {departureTimes}")
    public void shouldBeToldAboutTheTrainsAt(List<LocalTime> expectedDepartures) {
        assertThat(proposedDepartures).isEqualTo(expectedDepartures);
    }
}
