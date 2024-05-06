package com.example.course_service.Dtos;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Data
public class CourseDto {
    @Id
    private String courseId;
    private String courseName;
    private String category;
    private LocalDateTime learningTime;
    private String description;
    private String contentId;
    private String certificateId;
}
