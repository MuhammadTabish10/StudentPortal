package com.example.StudentPortal.controller;

import com.example.StudentPortal.dto.CourseDto;
import com.example.StudentPortal.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @PostMapping("/course")
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
        return ResponseEntity.ok(courseService.addCourse(courseDto));
    }

    @GetMapping("/course")
    public ResponseEntity<List<CourseDto>> getAllCourses(@RequestParam(value = "status") Boolean status) {
        List<CourseDto> courseDtoList = courseService.getAllCourses(status);
        return ResponseEntity.ok(courseDtoList);
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<CourseDto> getCourseById(@PathVariable Long id) {
        CourseDto courseDto = courseService.getCourseById(id);
        return ResponseEntity.ok(courseDto);
    }

    @PutMapping("/course/{id}")
    public ResponseEntity<CourseDto> updateCourse(@PathVariable Long id, @RequestBody CourseDto courseDto) {
        CourseDto updatedCourseDto = courseService.updateCourse(id, courseDto);
        return ResponseEntity.ok(updatedCourseDto);
    }

    @DeleteMapping("/course/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.ok().build();
    }
}
