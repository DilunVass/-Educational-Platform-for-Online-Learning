package com.educationPlatform.notificationService.notificationservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class emailDto {
    private String _id;
    private String body;
    private String subject;
    private String receiverMail;
}
