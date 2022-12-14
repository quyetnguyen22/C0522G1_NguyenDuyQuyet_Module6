package projectbackend.service.show_times;
import projectbackend.dto.movie.ITimeDto;
import projectbackend.model.show_times.Times;

import java.util.List;

public interface ITimesService {


    List<ITimeDto> getTime(String startDate, String endDate, Integer room);

    List<Times> getAllTime();

}
