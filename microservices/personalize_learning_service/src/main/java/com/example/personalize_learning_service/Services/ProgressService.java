package com.example.personalize_learning_service.Services;

import com.example.personalize_learning_service.Models.Progress;

public interface ProgressService {
    public Progress setProgress(String studentId, String courseId);

    public double getProgressByStudentAndCourse(String studentId, String courseId);

    public Progress updateProgress(String studentId, String courseId);
}
