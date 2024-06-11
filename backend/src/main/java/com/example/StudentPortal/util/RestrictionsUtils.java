package com.example.StudentPortal.util;

import com.example.StudentPortal.dto.RestrictionsDto;
import com.example.StudentPortal.model.Restrictions;

public class RestrictionsUtils {
    public static void updateRestrictions(Restrictions existingRestrictions, RestrictionsDto newRestrictionsDto) {
        existingRestrictions.setAttendance(newRestrictionsDto.getAttendance());
        existingRestrictions.setExcuses(newRestrictionsDto.getExcuses());
        existingRestrictions.setCollaboration(newRestrictionsDto.getCollaboration());
        existingRestrictions.setOralParticipation(newRestrictionsDto.getOralParticipation());
        existingRestrictions.setHomework(newRestrictionsDto.getHomework());
        existingRestrictions.setQualityOfHomework(newRestrictionsDto.getQualityOfHomework());
        existingRestrictions.setWritten(newRestrictionsDto.getWritten());
        existingRestrictions.setRepeats(newRestrictionsDto.getRepeats());
    }

    public static Restrictions toEntity(RestrictionsDto restrictionsDto) {
        return Restrictions.builder()
                .attendance(restrictionsDto.getAttendance())
                .excuses(restrictionsDto.getExcuses())
                .collaboration(restrictionsDto.getCollaboration())
                .oralParticipation(restrictionsDto.getOralParticipation())
                .homework(restrictionsDto.getHomework())
                .qualityOfHomework(restrictionsDto.getQualityOfHomework())
                .written(restrictionsDto.getWritten())
                .repeats(restrictionsDto.getRepeats())
                .build();
    }

    public static RestrictionsDto toDto(Restrictions restrictions) {
        return RestrictionsDto.builder()
                .attendance(restrictions.getAttendance())
                .excuses(restrictions.getExcuses())
                .collaboration(restrictions.getCollaboration())
                .oralParticipation(restrictions.getOralParticipation())
                .homework(restrictions.getHomework())
                .qualityOfHomework(restrictions.getQualityOfHomework())
                .written(restrictions.getWritten())
                .repeats(restrictions.getRepeats())
                .build();
    }

}
