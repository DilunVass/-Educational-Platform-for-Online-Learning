package com.example.course_service.Services;

import com.example.course_service.Dtos.EnrollmentRequest;
import com.example.course_service.Models.Course;
import com.example.course_service.Models.Enrollment;
import com.example.course_service.Repositories.CourseRepository;
import com.example.course_service.Repositories.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Course enrollStudent(EnrollmentRequest enrollmentRequest) {

        Enrollment enrollment = new Enrollment();
        enrollment.setStudentId(enrollmentRequest.getStudentId());
        enrollment.setCourseId(enrollmentRequest.getCourseId());
        enrollment.setEnrollmentType(enrollmentRequest.getEnrollmentType());
        enrollment.setEnrollmentDate(LocalDate.now());
        enrollmentRepository.save(enrollment);

        // Fetch the enrolled course and return
        return courseRepository.findById(enrollmentRequest.getCourseId()).orElseThrow(() -> new IllegalArgumentException("Course not found"));
    }

    public String unEnrollStudent(String studentId, String courseId) {
        Query query = new Query(Criteria.where("studentId").is(studentId).and("courseId").is(courseId));
        mongoTemplate.remove(query, "enrollments");

        return "Unenrollement successful";
    }
}
