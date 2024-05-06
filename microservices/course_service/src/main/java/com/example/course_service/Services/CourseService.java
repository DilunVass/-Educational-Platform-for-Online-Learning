package com.example.course_service.Services;

import com.example.course_service.Category;
import com.example.course_service.Dtos.CourseDto;
import com.example.course_service.Dtos.EnrollmentRequest;
import com.example.course_service.Models.Course;
import com.example.course_service.Models.Enrollment;
import com.example.course_service.Repositories.CourseRepository;
import com.example.course_service.Repositories.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.time.LocalDate;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course createCourse(CourseDto courseDto) {
        // Check if the course already exists
//        Query query = new Query(Criteria.where("courseId").is(courseDto.getCourseId()));
        Optional<Course> existingCourse = courseRepository.findById(courseDto.getCourseId());

        if (existingCourse.isPresent()) {
            throw new IllegalArgumentException("Course with ID " + courseDto.getCourseId() + " already exists.");
        }

        // Convert CourseDto to Course
        Course course = new Course();
        course.setCourseName(courseDto.getCourseName());
        course.setCourseId(courseDto.getCourseId());
        course.setCategory(courseDto.getCategory());
        course.setCourseDuration(courseDto.getCourseDuration());
        course.setDescription(courseDto.getDescription());
        course.setContentId(courseDto.getContentId());
        course.setCertificateId(courseDto.getCertificateId());

        // Save the course to the database
        return courseRepository.save(course);
    }

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


    public Course updateCourse(String courseId, Course courseDetails) {
        return null;
    }

    public void deleteCourse(String courseId) {
    }

    public Course getCourseById(String courseId) {
        return courseRepository.getCourseByCourseId(courseId);
    }

    public List<Course> getCoursesByCategory(Category category) {
        List<Course> courses = new ArrayList<>();
        courses = courseRepository.getAllCoursesByCategory(category);
        return courses;
    }
}
