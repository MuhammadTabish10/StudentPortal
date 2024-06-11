package com.example.StudentPortal.dto;

import com.example.StudentPortal.model.Class;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentDto {
    private Long id;
    private String name;
    private String email;
    private Boolean status;
    private Class classId;
}
