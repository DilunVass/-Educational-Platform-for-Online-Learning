package com.example.personalize_learning_service.Controllers;

import com.example.personalize_learning_service.Models.Progress;
import com.example.personalize_learning_service.Services.ProgressService;
import com.example.personalize_learning_service.Utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @PostMapping
    public ApiResponse<Progress> setProgress(String studentId, String courseId, double noOfSectionsCovered){
        Progress progress = progressService.setProgress(studentId,courseId, noOfSectionsCovered);
        return new ApiResponse<>(progress, 201, "Progress set successfully");
    }

    @GetMapping
    public ApiResponse<Double> getProgressByStudentAndCourse(String studentId, String courseId){
        double response = progressService.getProgressByStudentAndCourse(studentId, courseId);
        return new ApiResponse<>(response, 200, "Progress retrieved successfully");
    }

    @PutMapping
    public ApiResponse<Progress> updateProgress(String studentId, String courseId){
        Progress progress = progressService.updateProgress(studentId,courseId);
        return new ApiResponse<>(progress, 201, "Progress updated successfully");
    }



}
