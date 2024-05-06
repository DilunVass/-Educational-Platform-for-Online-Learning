package com.educationPlatform.userservice.model;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Column;

@Document(value = "users")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class User {

    //user details
    @Id
    private String _id;

    @NotEmpty(message = "First name is required")
    private String firstName;

    @NotEmpty(message = "Last name is required")
    private String lastName;

    @Column(unique = true)
    @NotEmpty(message = "email is required.")
    @Email(message = "Invalid email type")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    //courses ref
    private String[] courses;

    //token
    private String userRole;
    private String tokenPass;

}
