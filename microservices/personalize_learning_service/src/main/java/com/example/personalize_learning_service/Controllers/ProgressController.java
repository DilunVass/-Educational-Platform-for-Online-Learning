package com.example.personalize_learning_service.Controllers;

import com.example.personalize_learning_service.Models.Progress;
import com.example.personalize_learning_service.Services.ProgressService;
import com.example.personalize_learning_service.Utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @PostMapping
    public ApiResponse<Progress> setProgress(String studentId, String courseId){
        Progress progress = progressService.setProgress(studentId,courseId);
        return new ApiResponse<>(progress, 200, "Progress set successfully");
    }
}
