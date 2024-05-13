package com.example.payment_service.Services;

import com.example.payment_service.Dtos.PaymentDto;
import com.example.payment_service.Models.Payment;

public interface PaymentService {
    public Payment makePayment(PaymentDto paymentDto);
}
