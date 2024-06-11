package com.example.StudentPortal.service.Impl;

import com.example.StudentPortal.dto.ClassDto;
import com.example.StudentPortal.exception.RecordNotFoundException;
import com.example.StudentPortal.model.Class;
import com.example.StudentPortal.model.Course;
import com.example.StudentPortal.repository.ClassRepository;
import com.example.StudentPortal.repository.CourseRepository;
import com.example.StudentPortal.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClassServiceImpl implements ClassService {

    private final ClassRepository classRepository;
    private final CourseRepository courseRepository;

    @Override
    @Transactional
    public ClassDto addClass(ClassDto classDto) {
        Class schoolClass = toEntity(classDto);
        schoolClass.setStatus(true);
        Class savedClass = classRepository.save(schoolClass);
        return toDto(savedClass);
    }

    @Override
    public List<ClassDto> getAllClasses(Boolean status) {
        return classRepository.findByStatus(status)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public ClassDto getClassById(Long id) {
        Class schoolClass = classRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Class not found with id: " + id));
        return toDto(schoolClass);
    }

    @Override
    @Transactional
    public ClassDto updateClass(Long id, ClassDto classDto) {
        Class schoolClass = classRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Class not found with id: " + id));

        Set<Course> updatedCourses = classDto.getCourses().stream()
                .map(courseDto -> courseRepository.findById(courseDto.getId())
                        .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + courseDto.getId())))
                .collect(Collectors.toSet());

        schoolClass.setCourses(updatedCourses);
        schoolClass.setName(classDto.getName());

        Class updatedClass = classRepository.save(schoolClass);
        return toDto(updatedClass);
    }

    @Override
    @Transactional
    public void deleteClass(Long id) {
        Class schoolClass = classRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Class not found with id: " + id));

        schoolClass.setStatus(false);
        classRepository.save(schoolClass);
    }

    @Override
    @Transactional
    public ClassDto addCourseToClass(Long classId, Long courseId) {
        Class schoolClass = classRepository.findById(classId)
                .orElseThrow(() -> new RecordNotFoundException("Class not found with id: " + classId));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RecordNotFoundException("Course not found with id: " + courseId));

        schoolClass.getCourses().add(course);
        Class updatedClass = classRepository.save(schoolClass);
        return toDto(updatedClass);
    }

    public ClassDto toDto(Class schoolClass) {
        return ClassDto.builder()
                .id(schoolClass.getId())
                .name(schoolClass.getName())
                .status(schoolClass.getStatus())
                .courses(schoolClass.getCourses())
                .build();
    }

    public Class toEntity(ClassDto classDto) {
        return Class.builder()
                .id(classDto.getId())
                .name(classDto.getName())
                .status(classDto.getStatus())
                .courses(classDto.getCourses())
                .build();
    }
}
