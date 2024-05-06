package com.example.course_service.Repositories;

import com.example.course_service.Models.Course;
import com.example.course_service.Models.Enrollment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnrollmentRepository extends MongoRepository<Enrollment, String> {
}
