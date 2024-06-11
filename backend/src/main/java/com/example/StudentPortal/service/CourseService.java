package com.example.StudentPortal.service;

import com.example.StudentPortal.dto.CourseDto;

import java.util.List;

public interface CourseService {
    CourseDto addCourse(CourseDto courseDto);
    List<CourseDto> getAllCourses(Boolean status);
    CourseDto getCourseById(Long id);
    CourseDto updateCourse(Long id, CourseDto courseDto);
    void deleteCourse(Long id);
}
