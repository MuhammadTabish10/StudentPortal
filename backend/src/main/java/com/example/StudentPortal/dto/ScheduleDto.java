package com.example.StudentPortal.dto;

import com.example.StudentPortal.model.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.DayOfWeek;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ScheduleDto {
    private Long id;
    private Set<DayOfWeek> daysOfWeek;
    private Course course;
}
