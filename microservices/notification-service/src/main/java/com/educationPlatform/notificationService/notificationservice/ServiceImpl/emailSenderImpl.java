package com.educationPlatform.notificationService.notificationservice.ServiceImpl;

import com.educationPlatform.notificationService.notificationservice.services.emailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class emailSenderImpl implements emailService {
    @Autowired
    private JavaMailSender mailSender;
    @Override
    public void notificationMailSender(String toEmail, String subject, String body){
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("dn2001vassgunawardane@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        mailSender.send(message);
        System.out.println("Mail Send...");
    }
}
