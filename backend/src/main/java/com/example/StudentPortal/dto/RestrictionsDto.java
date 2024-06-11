package com.example.StudentPortal.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RestrictionsDto {
    private Long id;
    private Boolean attendance;
    private Boolean excuses;
    private Boolean collaboration;
    private Boolean oralParticipation;
    private Boolean homework;
    private Boolean qualityOfHomework;
    private Boolean written;
    private Boolean repeats;
}
