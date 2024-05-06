package com.example.course_service.Controllers;

import com.example.course_service.Dtos.CourseDto;
import com.example.course_service.Dtos.EnrollmentRequest;
import com.example.course_service.Models.Course;
import com.example.course_service.Services.CourseService;
import com.example.course_service.Utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private final CourseService courseService;

    public CourseController(CourseService courseService){
        this.courseService = courseService;
    }

    // Endpoint to display a wide range of courses
    @GetMapping
    public ApiResponse<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return new ApiResponse<>(courses, 200, "Courses retrieved successfully");
    }

    // Endpoint to create a new course
    @PostMapping
    public Course createCourse(@RequestBody CourseDto courseDto) {
        return courseService.createCourse(courseDto);
    }

    // Endpoint to update an existing course
    @PutMapping("/{courseId}")
    public Course updateCourse(@PathVariable String courseId, @RequestBody Course courseDetails) {
        return courseService.updateCourse(courseId, courseDetails);
    }

    // Endpoint to delete a course
    @DeleteMapping("/{courseId}")
    public void deleteCourse(@PathVariable String courseId) {
        courseService.deleteCourse(courseId);
    }

    // Endpoint to enroll a student in a course
    @PostMapping("/enroll")
    public Course enrollStudent(@RequestBody EnrollmentRequest enrollmentRequest) {
        return courseService.enrollStudent(enrollmentRequest);
    }

    // Endpoint to track student progress
//    @GetMapping("/progress/{studentId}")
//    public StudentProgress getStudentProgress(@PathVariable String studentId) {
//        return courseService.getStudentProgress(studentId);
//    }
}