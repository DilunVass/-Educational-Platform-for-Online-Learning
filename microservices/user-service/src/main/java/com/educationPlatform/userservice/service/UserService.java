package com.educationPlatform.userservice.service;

import com.educationPlatform.userservice.dto.UserDTO;
import com.educationPlatform.userservice.model.User;
import com.educationPlatform.userservice.repository.UserRepository;
import com.educationPlatform.userservice.util.ExtraUtilities;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity addUser(UserDTO dto){
        try{

            Optional<User> existing = userRepository.findUserByEmail(dto.getEmail());

            if(existing.isPresent()){
                return ResponseEntity.status(HttpStatus.CONFLICT).body("This Email is already taken, Please try again");
            }else{
                if (!ExtraUtilities.isEmailValid(dto.getEmail())){
                    throw new IllegalStateException("Invalid email");
                }else {
                    User user =map(dto);
                    userRepository.save(user);
                    return ResponseEntity.ok(HttpStatus.CREATED);
                }
            }
        }catch (Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    private User map(UserDTO dto){
        return User.builder()
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .email(dto.getEmail())
                .password(dto.getPassword())
                .userRole(dto.getUserRole())
                .build();
    }
}
