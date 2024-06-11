package com.example.StudentPortal.dto;

import com.example.StudentPortal.model.Restrictions;
import com.example.StudentPortal.model.Schedule;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CourseDto {
    private Long id;
    private String name;
    private String code;
    private Integer creditHours;
    private Boolean status;
    private Schedule schedule;
    private Restrictions restrictions;
}
