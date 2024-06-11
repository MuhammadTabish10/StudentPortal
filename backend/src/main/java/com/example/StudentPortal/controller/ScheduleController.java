package com.example.StudentPortal.controller;

import com.example.StudentPortal.dto.ScheduleDto;
import com.example.StudentPortal.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.Set;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ScheduleController {

    private final ScheduleService scheduleService;

    @PostMapping("/schedules/course/{courseId}")
    public ResponseEntity<ScheduleDto> createSchedule(@PathVariable Long courseId, @RequestBody Set<DayOfWeek> daysOfWeek) {
        ScheduleDto createdSchedule = scheduleService.createSchedule(courseId, daysOfWeek);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSchedule);
    }

    @GetMapping("/schedules/course/{courseId}")
    public ResponseEntity<ScheduleDto> getScheduleByCourseId(@PathVariable Long courseId) {
        ScheduleDto scheduleDto = scheduleService.getScheduleByCourseId(courseId);
        return ResponseEntity.ok(scheduleDto);
    }
}
