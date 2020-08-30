package manning.bddinaction.timetables;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DisplayName("When querying train services")
class WhenQueryingTrainServices {

    // Given
    InMemoryTimeTable timeTable = new InMemoryTimeTable();

    @Test
    @DisplayName("We can ask which lines go through any two stations")
    void queryLinesThroughStations() {
        // When
        timeTable.scheduleService("T1",
                LocalTimes.at("09:15"),
                "Hornsby",
                "Central");
        // Then
        assertThat(timeTable.findLinesThrough ("Hornsby", "Central")).hasSize(1);
    }

    @Test
    @DisplayName("Train lines only go in one direction")
    void trainLinesOnlyGoInOneDirection() {
        // When
        timeTable.scheduleService("T1",
                LocalTimes.at("09:15"),
                "Hornsby",
                "Central");
        // Then
        assertThat(timeTable.findLinesThrough ( "Central", "Hornsby")).hasSize(0);
    }

    @Test
    @DisplayName("Each line can have a number of departure times")
    void trainLinesHaveMoreThanOneDepartureTime() {
        // When
        timeTable.scheduleService("T1",
                LocalTimes.at("09:15","09:45"),
                "Hornsby",
                "Central");
        // Then
        assertThat(timeTable.getDepartures ( "T1", "Hornsby")).hasSize(2);
    }

    @Test
    @DisplayName("An UnknownLineException should be thrown if the line is not known")
    void unknownTrainLines() {
        assertThrows(UnknownLineException.class,
                () -> timeTable.getDepartures ( "Unknown", "Hornsby"));
    }
}
