package com.example.personalize_learning_service.Repositories;

import com.example.personalize_learning_service.Models.Progress;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProgressRepository extends MongoRepository<Progress, Long> {
}