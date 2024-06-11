package com.example.StudentPortal.controller;

import com.example.StudentPortal.dto.StudentDto;
import com.example.StudentPortal.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;

    @PostMapping("/student")
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto) {
        return ResponseEntity.ok(studentService.addStudent(studentDto));
    }

    @GetMapping("/student")
    public ResponseEntity<List<StudentDto>> getAllStudents() {
        List<StudentDto> studentDtoList = studentService.getAllStudents();
        return ResponseEntity.ok(studentDtoList);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable Long id) {
        StudentDto studentDto = studentService.getStudentById(id);
        return ResponseEntity.ok(studentDto);
    }

    @PutMapping("/student/{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable Long id, @RequestBody StudentDto studentDto) {
        StudentDto updatedStudentDto = studentService.updateStudent(id, studentDto);
        return ResponseEntity.ok(updatedStudentDto);
    }

    @DeleteMapping("/student/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/student/{studentId}/class/{classId}")
    public ResponseEntity<StudentDto> assignStudentToClass(@PathVariable Long studentId, @PathVariable Long classId) {
        StudentDto updatedStudentDto = studentService.assignStudentToClass(studentId, classId);
        return ResponseEntity.ok(updatedStudentDto);
    }

    @GetMapping("/student/class/{classId}/count")
    public ResponseEntity<Long> countStudentsInClass(@PathVariable Long classId) {
        Long studentCount = studentService.countStudentsInClass(classId);
        return ResponseEntity.ok(studentCount);
    }
}
