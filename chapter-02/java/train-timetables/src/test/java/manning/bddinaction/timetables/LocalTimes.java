package manning.bddinaction.timetables;

import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class LocalTimes {
    public static List<LocalTime> at(String... times) {
        return Arrays.stream(times)
                .map(LocalTime::parse)
                .collect(Collectors.toList());
    }
}
