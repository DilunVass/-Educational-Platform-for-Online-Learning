package com.example.course_service.Services;

import com.example.course_service.Dtos.CourseDto;
import com.example.course_service.Models.Course;
import com.example.course_service.Repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

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
        course.setLearningTime(courseDto.getLearningTime());
        course.setDescription(courseDto.getDescription());
        course.setContentId(courseDto.getContentId());
        course.setCertificateId(courseDto.getCertificateId());

        // Save the course to the database
        return courseRepository.save(course);
    }

    // Add more methods for creating, updating, and deleting courses
}
