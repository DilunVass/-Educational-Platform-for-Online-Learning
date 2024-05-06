package com.example.course_service.Models;

import com.example.course_service.Category;
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
    private Category category;
    private String courseDuration;
    private String description;
    private String contentId;
    private String certificateId;

}
