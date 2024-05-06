package com.example.course_service.Repositories;

import com.example.course_service.Models.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course, String> {
}
