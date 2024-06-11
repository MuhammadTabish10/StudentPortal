package com.example.StudentPortal.dto;

import com.example.StudentPortal.model.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClassDto {
    private Long id;
    private String name;
    private Boolean status;
    private Set<Course> courses = new HashSet<>();
}
