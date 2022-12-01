package projectbackend.dto.movie;

import java.util.List;

public class MovieShowTimeDto {

    IMovieByIdDto MovieByIdDto;
    List<IShowTimeDto> ShowTimeDto;

    public MovieShowTimeDto() {
    }

    public IMovieByIdDto getMovieByIdDto() {
        return MovieByIdDto;
    }

    public void setMovieByIdDto(IMovieByIdDto movieByIdDto) {
        MovieByIdDto = movieByIdDto;
    }

    public List<IShowTimeDto> getShowTimeDto() {
        return ShowTimeDto;
    }

    public void setShowTimeDto(List<IShowTimeDto> showTimeDto) {
        ShowTimeDto = showTimeDto;
    }
}
