package com.example.course_service.Models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "courses")
public class Course {
    @Id
    private String courseId;
    private String courseName;
    private String category;
    private LocalDateTime learningTime;
    private String description;
    private String contentId;
    private String certificateId;

}