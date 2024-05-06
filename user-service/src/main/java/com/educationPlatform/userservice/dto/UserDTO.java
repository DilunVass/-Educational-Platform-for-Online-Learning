package com.educationPlatform.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private String firstName, lastName, email, password, userRole;
    private String[] courses;
}
