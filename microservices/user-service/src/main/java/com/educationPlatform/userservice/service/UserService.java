package com.educationPlatform.userservice.service;

import com.educationPlatform.userservice.model.User;
import com.educationPlatform.userservice.util.ApiResponse;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUser(String userId);

    ApiResponse<User> updateUser(String userId, User updateUser);

//    public User deleteUser(String userId);
}
