package com.educationPlatform.notificationService.notificationservice.repository;

import com.educationPlatform.notificationService.notificationservice.models.email;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface emailRepository extends MongoRepository<email, String> {
}
