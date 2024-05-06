package com.example.payment_service.Services;

import com.example.payment_service.Dtos.PaymentDto;
import com.example.payment_service.Models.Payment;
import com.example.payment_service.Repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment makePayment(PaymentDto paymentDto) {
        Payment payment = new Payment();
        payment.setCardNo(paymentDto.getCardNo());
        payment.setName(paymentDto.getName());
        payment.setExpiryDate(paymentDto.getExpiryDate());
        payment.setCvc(paymentDto.getCvc());

        paymentRepository.save(payment);

        return payment;
    }
}
