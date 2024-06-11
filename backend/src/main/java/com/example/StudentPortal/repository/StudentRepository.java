package com.example.StudentPortal.repository;

import com.example.StudentPortal.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByStatus(boolean status);
    Long countByClassId(Long classId);
}
