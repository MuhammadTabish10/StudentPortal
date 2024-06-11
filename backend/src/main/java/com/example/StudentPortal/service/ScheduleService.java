package com.example.StudentPortal.service;

import com.example.StudentPortal.dto.ScheduleDto;

import java.time.DayOfWeek;
import java.util.Set;

public interface ScheduleService {
    ScheduleDto createSchedule(Long courseId, Set<DayOfWeek> daysOfWeek);
    ScheduleDto getScheduleByCourseId(Long courseId);
}
