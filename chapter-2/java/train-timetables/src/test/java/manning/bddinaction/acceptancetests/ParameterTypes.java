package manning.bddinaction.acceptancetests;

import io.cucumber.java.ParameterType;

import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

public class ParameterTypes {

    @ParameterType(".*")
    public String line(String lineName) {
        return lineName;
    }

    @ParameterType(".*")
    public String station(String stationName) {
        return stationName;
    }

    @ParameterType(".*")
    public LocalTime departureTime(String departureTime) {
        return LocalTime.parse(departureTime);
    }

    @ParameterType(".*")
    public List<LocalTime> departureTimes(String departureTimes) {
        return localTimesFrom(departureTimes);
    }

    private List<LocalTime> localTimesFrom(String listOfDepartureTimes) {
        return stream(listOfDepartureTimes.split(","))
                .map(String::trim)
                .map(LocalTime::parse)
                .collect(Collectors.toList());
    }
}
