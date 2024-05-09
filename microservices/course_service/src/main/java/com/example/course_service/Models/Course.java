package com.example.course_service.Models;

import com.example.course_service.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "courses")
public class Course {
    @Id
    private ObjectId courseId;
    private String courseName;
    private Category category;
    private String courseDuration;
    private String description;
    private List<String> sectionIds;
    private String certificateId;
    private double price;
    private String instructor;

}
