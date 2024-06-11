package com.example.StudentPortal.service;

import com.example.StudentPortal.dto.ClassDto;
import com.example.StudentPortal.dto.CourseDto;

import java.util.List;

public interface ClassService {
    ClassDto addClass(ClassDto classDto);
    List<ClassDto> getAllClasses(Boolean status);
    ClassDto getClassById(Long id);
    ClassDto updateClass(Long id, ClassDto classDto);
    void deleteClass(Long id);
    ClassDto addCourseToClass(Long classId, Long courseId);
}
