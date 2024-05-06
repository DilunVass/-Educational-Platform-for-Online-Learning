package com.example.course_service.Dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
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
