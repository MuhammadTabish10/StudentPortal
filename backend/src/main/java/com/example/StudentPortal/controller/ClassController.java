package com.example.StudentPortal.controller;

import com.example.StudentPortal.dto.ClassDto;
import com.example.StudentPortal.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ClassController {
    private final ClassService classService;

    @PostMapping("/class")
    public ResponseEntity<ClassDto> createClass(@RequestBody ClassDto classDto) {
        return ResponseEntity.ok(classService.addClass(classDto));
    }

    @GetMapping("/class")
    public ResponseEntity<List<ClassDto>> getAllClasses(@RequestParam(value = "status") Boolean status) {
        List<ClassDto> classDtoList = classService.getAllClasses(status);
        return ResponseEntity.ok(classDtoList);
    }

    @GetMapping("/class/{id}")
    public ResponseEntity<ClassDto> getClassById(@PathVariable Long id) {
        ClassDto classDto = classService.getClassById(id);
        return ResponseEntity.ok(classDto);
    }

    @PutMapping("/class/{id}")
    public ResponseEntity<ClassDto> updateClass(@PathVariable Long id, @RequestBody ClassDto classDto) {
        ClassDto updatedClassDto = classService.updateClass(id, classDto);
        return ResponseEntity.ok(updatedClassDto);
    }

    @DeleteMapping("/class/{id}")
    public ResponseEntity<Void> deleteClass(@PathVariable Long id) {
        classService.deleteClass(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/class/{classId}/course/{courseId}")
    public ResponseEntity<ClassDto> addCourseToClass(@PathVariable Long classId, @PathVariable Long courseId) {
        ClassDto updatedClassDto = classService.addCourseToClass(classId, courseId);
        return ResponseEntity.ok(updatedClassDto);
    }

}
