package com.example.StudentPortal.service.Impl;

import com.example.StudentPortal.dto.CourseDto;
import com.example.StudentPortal.exception.RecordNotFoundException;
import com.example.StudentPortal.model.Course;
import com.example.StudentPortal.model.Restrictions;
import com.example.StudentPortal.repository.CourseRepository;
import com.example.StudentPortal.service.CourseService;
import com.example.StudentPortal.util.RestrictionsUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    @Transactional
    public CourseDto addCourse(CourseDto courseDto) {
        Course course = toEntity(courseDto);
        course.setStatus(true);
        Course savedCourse = courseRepository.save(course);
        return toDto(savedCourse);
    }

    @Override
    public List<CourseDto> getAllCourses(Boolean status) {
        return courseRepository.findByStatus(status)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto getCourseById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + id));
        return toDto(course);
    }

    @Override
    @Transactional
    public CourseDto updateCourse(Long id, CourseDto courseDto) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + id));

        course.setName(courseDto.getName());
        course.setCode(courseDto.getCode());
        course.setCreditHours(courseDto.getCreditHours());

        if (courseDto.getRestrictions() != null) {
            if (course.getRestrictions() != null) {
                Restrictions restrictions = course.getRestrictions();
                RestrictionsUtils.updateRestrictions(restrictions, RestrictionsUtils.toDto(courseDto.getRestrictions()));
            } else {
                Restrictions newRestrictions = courseDto.getRestrictions();
                course.setRestrictions(newRestrictions);
            }
        }

        Course updatedCourse = courseRepository.save(course);
        return toDto(updatedCourse);
    }

    @Override
    @Transactional
    public void deleteCourse(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + id));

        course.setStatus(false);
        courseRepository.save(course);
    }

    public CourseDto toDto(Course course) {
        return CourseDto.builder()
                .id(course.getId())
                .name(course.getName())
                .code(course.getCode())
                .creditHours(course.getCreditHours())
                .restrictions(course.getRestrictions())
                .schedule(course.getSchedule())
                .status(course.getStatus())
                .build();
    }

    public Course toEntity(CourseDto courseDto) {
        return Course.builder()
                .id(courseDto.getId())
                .name(courseDto.getName())
                .code(courseDto.getCode())
                .creditHours(courseDto.getCreditHours())
                .restrictions(courseDto.getRestrictions())
                .schedule(courseDto.getSchedule())
                .status(courseDto.getStatus())
                .build();
    }
}
