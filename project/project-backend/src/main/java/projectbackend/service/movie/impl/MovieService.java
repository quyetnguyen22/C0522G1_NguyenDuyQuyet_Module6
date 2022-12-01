package projectbackend.service.movie.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import projectbackend.dto.movie.IMovieDto;
import projectbackend.dto.movie.MovieFullDto;
import projectbackend.dto.show_times.ShowTimesDto;
import projectbackend.model.movie.Movie;
import projectbackend.model.show_times.ShowTimes;
import projectbackend.repository.movie.IMovieRepository;
import projectbackend.repository.show_times.IShowTimesRepository;
import projectbackend.service.movie.IMovieService;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService implements IMovieService {
    @Autowired
    private IMovieRepository iMovieRepository;
    @Autowired
    private IShowTimesRepository showTimesRepository;


    @Override
    public Optional<IMovieDto> getMovieDetail(Integer id) {
        return iMovieRepository.movieDetail(id);
    }

    @Override
    public Page<IMovieDto> findAllHome(String name, Pageable pageable) {
        return iMovieRepository.findAllHome(name, pageable);
    }

    @Override
    public Page<IMovieDto> findAllMovie(Pageable pageable, String keyword) {
        return iMovieRepository.findAllMovie(pageable, keyword);
    }

    @Override
    public void deleteById(int idDelete) {
        iMovieRepository.deleteById(idDelete);
    }

    @Override
    public Movie addMovie(Movie movie) {
        return iMovieRepository.save(movie);
    }

    @Override
    public void addMovieDto(MovieFullDto movieFullDto) {
        Movie movie = new Movie();
        BeanUtils.copyProperties(movieFullDto,movie);
        Movie movie1 = iMovieRepository.save(movie);
        for (ShowTimesDto item : movieFullDto.getShowTimeDto()){
            ShowTimes showTimes = new ShowTimes();
            item.setMovie(movie1);
            BeanUtils.copyProperties(item,showTimes);
            showTimesRepository.save(showTimes);
        }

    }

    @Override
    public void editMovieDto(MovieFullDto movieFullDto) {
        Movie movie = new Movie();
        BeanUtils.copyProperties(movieFullDto, movie);
        iMovieRepository.save(movie);
        for (ShowTimesDto item : movieFullDto.getShowTimeDto()) {
            ShowTimes showTimes = new ShowTimes();
            BeanUtils.copyProperties(item, showTimes);
            showTimesRepository.save(showTimes);
        }
    }

    @Override
    public Movie getMovie(Integer id) {
        return iMovieRepository.findMovieById(id);
    }

    @Override
    public List<ShowTimes> getShowTime(Integer id) {
        return iMovieRepository.findShowTimeById(id);
    }

    @Override
    public Optional<Movie> finById(Integer id) {
        return iMovieRepository.findById(id);
    }

    @Override
    public List<Movie> getListMovie() {
        return iMovieRepository.findAll();
    }

}
