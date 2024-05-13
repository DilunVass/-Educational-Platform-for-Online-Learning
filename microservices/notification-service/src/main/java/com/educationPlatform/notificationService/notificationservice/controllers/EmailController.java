package com.educationPlatform.notificationService.notificationservice.controllers;

import com.educationPlatform.notificationService.notificationservice.dtos.emailDto;
import com.educationPlatform.notificationService.notificationservice.models.email;
import com.educationPlatform.notificationService.notificationservice.services.emailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/email")
public class EmailController {

    @Autowired
    emailService service;

    public void sendEmail(@RequestBody emailDto dto){
        service.notificationMailSender(dto.getReceiverMail(), dto.getSubject(), dto.getBody());
    }

}
