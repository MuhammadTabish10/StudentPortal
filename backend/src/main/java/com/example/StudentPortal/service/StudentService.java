package com.example.StudentPortal.service;

import com.example.StudentPortal.dto.StudentDto;

import java.util.List;

public interface StudentService {
    StudentDto addStudent(StudentDto studentDto);
    List<StudentDto> getAllStudents();
    StudentDto getStudentById(Long id);
    StudentDto updateStudent(Long id, StudentDto studentDto);
    void deleteStudent(Long id);
    StudentDto assignStudentToClass(Long studentId, Long classId);
    Long countStudentsInClass(Long classId);
}
