package com.example.course_service.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "enrollments")
public class Enrollment {
    @Id
    private ObjectId enrollmentId;
    private String studentId;
    private String courseId;
    private String enrollmentType; // e.g., "self-paced", "instructor-led"
    private LocalDate enrollmentDate; // Optional, can be generated by the service
}
