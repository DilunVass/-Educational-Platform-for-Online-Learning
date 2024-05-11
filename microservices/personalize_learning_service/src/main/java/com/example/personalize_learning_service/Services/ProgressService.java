package com.example.personalize_learning_service.Services;

import com.example.personalize_learning_service.Models.Progress;
import com.example.personalize_learning_service.Repositories.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class ProgressService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ProgressRepository progressRepository;

//    public Progress setProgress(String studentId, String courseId, double noOfSectionsCovered) {
//        Progress progress = new Progress();
//
//        String contentServiceUrl = "http://LAPTOP-VI8PV1N1:8089/api/contents/noOfSections";
//        ResponseEntity<Double> responseEntity = restTemplate.getForEntity(contentServiceUrl, Double.class);
//        Double noOfSections = responseEntity.getBody();
//
//        if (noOfSections != null && noOfSections != 0.0) {
//            double progressPercentage = (noOfSectionsCovered / noOfSections) * 100;
//            progress.setProgressPercentage(progressPercentage);
//        }
//
//        if(progress.getProgressPercentage() == 100){
//            progress.setCompleted(true);
//        }
//
//        progressRepository.save(progress);
//        return progress;
//    }

    public Progress setProgress(String studentId, String courseId, double noOfSectionsCovered) {
        // Query progress repository to check if a progress document exists for the given studentId and courseId
        Optional<Progress> optionalProgress = progressRepository.findByStudentIdAndCourseId(studentId, courseId);
        Progress progress;

        String contentServiceUrl = "http://LAPTOP-VI8PV1N1:8089/api/contents/noOfSections";
        ResponseEntity<Double> responseEntity = restTemplate.getForEntity(contentServiceUrl, Double.class);
        Double noOfSections = responseEntity.getBody();

        if (optionalProgress.isPresent()) {
            // If progress document exists, update its fields
            progress = optionalProgress.get();

            if (noOfSections != null && noOfSections != 0.0) {
                progress.setNoOfSectionsCovered(noOfSectionsCovered);
                double progressPercentage = (noOfSectionsCovered / progress.getNoOfSections()) * 100;
                progress.setProgressPercentage(progressPercentage);
                progress.setCompleted(progressPercentage == 100);
            }

        } else {
            // If progress document doesn't exist, create a new one
            progress = new Progress();
            progress.setStudentId(studentId);
            progress.setCourseId(courseId);

            if (noOfSections != null && noOfSections != 0.0) {
                progress.setNoOfSections(noOfSections);
                progress.setNoOfSectionsCovered(noOfSectionsCovered);
                double progressPercentage = (noOfSectionsCovered / noOfSections) * 100;
                progress.setProgressPercentage(progressPercentage);
                progress.setCompleted(progressPercentage == 100);
            }
        }

        // Save the progress document
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
