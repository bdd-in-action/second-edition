package manning.bddinaction.timetables;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("When scheduling train services")
class WhenRecordingTrainSchedules {

    // Given
    InMemoryTimeTable timeTable = new InMemoryTimeTable();

    @Test
    @DisplayName("We can schedule a trip with a single scheduled time")
    void tripWithOneScheduledTime() {
        // When
        timeTable.scheduleService("T1",
                LocalTimes.at("09:15"),
                "Hornsby",
                "Central");
        // Then
        assertThat(timeTable.getDepartures("T1", "Hornsby")).hasSize(1);
    }

    @Test
    @DisplayName("We can schedule a trip with several scheduled times")
    void tripWithSeveralScheduledTime() {
        // When
        timeTable.scheduleService("T1",
                LocalTimes.at("09:15", "09:45"),
                "Hornsby",
                "Central");
        // Then
        assertThat(timeTable.getDepartures("T1", "Hornsby")).hasSize(2);
    }

    @Test
    @DisplayName("We can schedule trips on multiple lines")
    void tripWithSeveralScheduledTimesAndLines() {
        // When
        timeTable.scheduleService("T1",
                LocalTimes.at("09:15", "09:45"),
                "Hornsby",
                "Central");
        // And
        timeTable.scheduleService("T9",
                LocalTimes.at("09:10", "09:20","09:30"),
                "Hornsby",
                "Central");

        // Then
        assertThat(timeTable.getDepartures("T1", "Hornsby")).hasSize(2);
        assertThat(timeTable.getDepartures("T9", "Hornsby")).hasSize(3);
    }
}
