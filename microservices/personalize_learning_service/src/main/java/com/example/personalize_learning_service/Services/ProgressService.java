package com.example.personalize_learning_service.Services;

import com.example.personalize_learning_service.Models.Progress;
import com.example.personalize_learning_service.Repositories.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProgressService {

    @Autowired
    private ProgressRepository progressRepository;

    public Progress setProgress(String studentId, String courseId) {
        Progress progress = new Progress();
        //want to get from content service
        double noOfSectionsCovered = 7;
        double noOfSections = 7;

        double progressPercentage = (noOfSectionsCovered/noOfSections) * 100;
        progress.setProgressPercentage(progressPercentage);

        if(progress.getProgressPercentage() == 100){
            progress.setCompleted(true);
        }

        progressRepository.save(progress);
        return progress;
    }

    public double getProgressByStudentAndCourse(String studentId, String courseId) {
        return progressRepository.getProgressPercentageByStudentIdAndCourseId(studentId,courseId);
    }

    public Progress updateProgress(String studentId, String courseId) {
        Progress existingProgress = progressRepository.getProgressByStudentIdAndCourseId(studentId, courseId);

        double prev = existingProgress.getNoOfSectionsCovered();
        double next = prev + 1;
        existingProgress.setNoOfSectionsCovered(next);

//        existingProgress.setNoOfSectionsCovered(noOfSectionsCovered);

        double progressNewPercentage = (next/existingProgress.getNoOfSections()) * 100;
        existingProgress.setProgressPercentage(progressNewPercentage);

        progressRepository.save(existingProgress);

        return existingProgress;
    }
}
