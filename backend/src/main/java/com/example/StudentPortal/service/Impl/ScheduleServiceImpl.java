package com.example.StudentPortal.service.Impl;

import com.example.StudentPortal.dto.ScheduleDto;
import com.example.StudentPortal.exception.RecordNotFoundException;
import com.example.StudentPortal.model.Course;
import com.example.StudentPortal.model.Schedule;
import com.example.StudentPortal.repository.CourseRepository;
import com.example.StudentPortal.repository.ScheduleRepository;
import com.example.StudentPortal.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.DayOfWeek;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

    private final CourseRepository courseRepository;
    private final ScheduleRepository scheduleRepository;
    @Override
    @Transactional
    public ScheduleDto createSchedule(Long courseId, Set<DayOfWeek> daysOfWeek) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + courseId));

        Schedule schedule = Schedule.builder()
                .daysOfWeek(daysOfWeek)
                .course(course)
                .build();

        Schedule savedSchedule = scheduleRepository.save(schedule);
        course.setSchedule(savedSchedule);
        return toDto(savedSchedule);
    }


    @Override
    public ScheduleDto getScheduleByCourseId(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + courseId));

        Schedule schedule = course.getSchedule();
        if (schedule == null) {
            throw new RecordNotFoundException("Schedule not found for course with id: " + courseId);
        }

        return toDto(schedule);
    }

    public Schedule toEntity(ScheduleDto scheduleDto) {
        return Schedule.builder()
                .id(scheduleDto.getId())
                .daysOfWeek(scheduleDto.getDaysOfWeek())
                .course(scheduleDto.getCourse())
                .build();
    }

    public ScheduleDto toDto(Schedule schedule) {
        return ScheduleDto.builder()
                .id(schedule.getId())
                .daysOfWeek(schedule.getDaysOfWeek())
                .course(schedule.getCourse())
                .build();
    }
}
