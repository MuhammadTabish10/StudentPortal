package com.example.StudentPortal.service.Impl;

import com.example.StudentPortal.dto.StudentDto;
import com.example.StudentPortal.exception.RecordNotFoundException;
import com.example.StudentPortal.model.Class;
import com.example.StudentPortal.model.Student;
import com.example.StudentPortal.repository.ClassRepository;
import com.example.StudentPortal.repository.StudentRepository;
import com.example.StudentPortal.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final ClassRepository classRepository;

    @Override
    @Transactional
    public StudentDto addStudent(StudentDto studentDto) {
        Student student = toEntity(studentDto);
        student.setStatus(true);
        Student savedStudent = studentRepository.save(student);
        return toDto(savedStudent);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return studentRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public StudentDto getStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Student not found with id: " + id));
        return toDto(student);
    }

    @Override
    @Transactional
    public StudentDto updateStudent(Long id, StudentDto studentDto) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Student not found with id: " + id));

        student.setName(studentDto.getName());
        student.setEmail(studentDto.getEmail());
        student.setClassId(studentDto.getClassId());

        Student updatedStudent = studentRepository.save(student);
        return toDto(updatedStudent);
    }

    @Override
    @Transactional
    public void deleteStudent(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Student not found with id: " + id));

        student.setStatus(false);
        studentRepository.save(student);
    }

    @Override
    @Transactional
    public StudentDto assignStudentToClass(Long studentId, Long classId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RecordNotFoundException("Student not found with id: " + studentId));

        Class schoolClass = classRepository.findById(classId)
                .orElseThrow(() -> new RecordNotFoundException("Class not found with id: " + classId));

        student.setClassId(schoolClass);
        Student updatedStudent = studentRepository.save(student);
        return toDto(updatedStudent);
    }

    @Override
    public Long countStudentsInClass(Long classId) {
        return studentRepository.countByClassId(classId);
    }

    public StudentDto toDto(Student student) {
        return StudentDto.builder()
                .id(student.getId())
                .name(student.getName())
                .email(student.getEmail())
                .classId(student.getClassId())
                .status(student.getStatus())
                .build();
    }

    public Student toEntity(StudentDto studentDto) {
        return Student.builder()
                .id(studentDto.getId())
                .name(studentDto.getName())
                .email(studentDto.getEmail())
                .classId(studentDto.getClassId())
                .status(studentDto.getStatus())
                .build();
    }
}
