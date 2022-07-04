package manning.bddinaction.timetables;

import java.time.LocalTime;
import java.util.List;

public interface CanScheduleServices {
    void scheduleService(String line,
                         List<LocalTime> departingAt,
                         String departure,
                         String destination);

}
