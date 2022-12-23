package projectbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projectbackend.dto.movie.ITimeDto;
import projectbackend.dto.show_times.TimesDto;
import projectbackend.model.show_times.Times;
import projectbackend.service.show_times.ITimesService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/showTime")
public class ShowTimesRestController {

    @Autowired
    private ITimesService timesService;

    @GetMapping("/time")
    public ResponseEntity<List<ITimeDto>> getTime(@RequestParam(value = "startDate", defaultValue = "") String startDate,
                                                  @RequestParam(value = "endDate", defaultValue = "") String endDate,
                                                  @RequestParam(value = "idRoom", defaultValue = "") Integer room) {
        List<ITimeDto> times = timesService.getTime(startDate, endDate, room);
        return new ResponseEntity<>(times, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Times>> getAllTime() {
        List<Times> times = timesService.getAllTime();
        return new ResponseEntity<>(times, HttpStatus.OK);
    }
}
