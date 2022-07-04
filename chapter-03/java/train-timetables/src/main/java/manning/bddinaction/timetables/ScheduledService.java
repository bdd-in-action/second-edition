package manning.bddinaction.timetables;

import java.time.LocalTime;
import java.util.Collections;
import java.util.List;

public class ScheduledService {
    private final String departure;
    private final String destination;
    private final List<LocalTime> departureTimes;

    public static ScheduledService NO_SERVICE
            = new ScheduledService("","", Collections.emptyList());

    public ScheduledService(String from, String to, List<LocalTime> at) {
        this.departure = from;
        this.destination = to;
        this.departureTimes = at;
    }

    public List<LocalTime> getDepartureTimes() {
        return departureTimes;
    }

    public boolean goesBetween(String from, String to) {
        return departure.equals(from) && destination.equals(to);
    }
}
