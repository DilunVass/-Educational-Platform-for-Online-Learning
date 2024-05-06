package com.example.course_service.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
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