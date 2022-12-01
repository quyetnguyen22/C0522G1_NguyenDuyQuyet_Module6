package projectbackend.dto.movie;

import projectbackend.dto.show_times.ShowTimesDto;
import projectbackend.model.employee.Employee;

import java.util.List;

public interface IMovieByIdDto {

    Integer getId();
    String getName();
    String getImage();
    String getStartDay();
    String getEndDay();
    String getDirector();
    Integer getFilmTime();
    String getTrailer();
    String getContent();
    String getFilmStudio();
    String getActor();
    Integer getVersion();
//    List<IMovieTypeDto> getMovieTypeDto();
//    List<IShowTimeDto> getShowTimeDto();
//    Employee getEmployee();
}
