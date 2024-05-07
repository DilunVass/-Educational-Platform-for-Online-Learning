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

        return progress;
    }
}
