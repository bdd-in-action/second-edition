package manning.bddinaction.itineraries;

import manning.bddinaction.timetables.TimeTable;

import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

public class ItineraryService {
    private TimeTable timeTable;

    public ItineraryService(TimeTable timeTable) {
        this.timeTable = timeTable;
    }

    public List<LocalTime> findNextDepartures(LocalTime departureTime, String from, String to) {

        List<String> lines = timeTable.findLinesThrough(from, to);

        return lines.stream()
                .flatMap(line -> timeTable.getDepartures(line, from)
                                          .stream())
                .filter(trainTime -> !trainTime.isBefore(departureTime))
                .sorted()
                .limit(2)
                .collect(Collectors.toList());
    }
}
