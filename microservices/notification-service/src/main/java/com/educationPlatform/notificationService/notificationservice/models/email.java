package com.educationPlatform.notificationService.notificationservice.models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "email")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class email {

    @Id
    private String _id;
    private String body;
    private String subject;
    private String receiverMail;
}
