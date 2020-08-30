package manning.bddinaction.itineraries;

import manning.bddinaction.timetables.TimeTable;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("When finding the next departure times")
class WhenFindingNextDepatureTimes {

    private LocalTime at(String time) {
        return LocalTime.parse(time, DateTimeFormatter.ofPattern("H:mm"));
    }

    private TimeTable departures(LocalTime... departures) {
        return new TimeTable() {

            @Override
            public List<String> findLinesThrough(String from,
                                                 String to) {
                return List.of("T1");
            }

            @Override
            public List<LocalTime> getDepartures(String line, String from) {
                return List.of(departures);
            }
        };
    }

    private TimeTable timeTable;
    private ItineraryService itineraries;

    @Test
    @DisplayName("should the first after the departure time")
    void tripWithOneScheduledTime() {

        timeTable = departures(at("8:10"), at("8:20"), at("8:30"));
        itineraries = new ItineraryService(timeTable);

        List<LocalTime> proposedDepartures
                = itineraries.findNextDepartures(at("8:25"), "Hornsby", "Central");

        assertThat(proposedDepartures).containsExactly(at("8:30"));
    }

    @Test
    @DisplayName("should propose the next 2 trains")
    void tripWithSeveralScheduledTimes() {

        timeTable = departures(at("8:10"), at("8:20"), at("8:30"), at("5:30"));
        itineraries = new ItineraryService(timeTable);

        List<LocalTime> proposedDepartures
                = itineraries.findNextDepartures(at("8:05"), "Hornsby", "Central");

        assertThat(proposedDepartures).containsExactly(at("8:10"), at("8:20"));

    }

    @Test
    @DisplayName("No trains should be returned if none are available")
    void anAfterHoursTrip() {

        timeTable = departures(at("8:10"), at("8:20"), at("8:30"));
        itineraries = new ItineraryService(timeTable);

        List<LocalTime> proposedDepartures
                = itineraries.findNextDepartures(at("8:50"),
                "Hornsby", "Central");

        assertThat(proposedDepartures).isEmpty();
    }
}
