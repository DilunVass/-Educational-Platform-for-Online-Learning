package com.educationPlatform.userservice.ServiceImpl;

import com.educationPlatform.userservice.model.User;
import com.educationPlatform.userservice.repository.UserRepository;
import com.educationPlatform.userservice.service.UserService;
import com.educationPlatform.userservice.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(String userId) {
        Optional<User> exUser = userRepository.findUserBy_id(userId);

        if (exUser.isPresent()){
            User user = exUser.get();
            return user;
        }else {
            throw new IllegalStateException("User not found");
        }
    }

    @Override
    public ApiResponse<User> updateUser(String userId, User updateUser) {
        Optional<User> exUser = userRepository.findUserBy_id(userId);
        User user = exUser.get();
        if (exUser.isPresent()){
            user = exUser.get();

            if (updateUser.getUser_name() != null){
                user.setUser_name(updateUser.getUser_name());
            }
            if (updateUser.getFirst_name() != null){
                user.setFirst_name(updateUser.getFirst_name());
            }
            if (updateUser.getLast_name() != null){
                user.setLast_name(updateUser.getLast_name());
            }
            if (updateUser.getEmail() != null){
                user.setEmail(updateUser.getEmail());
            }
            if (updateUser.getPassword() != null){
                user.setPassword(updateUser.getPassword());
            }
            if (updateUser.getContact_no() != null){
                user.setContact_no(updateUser.getContact_no());
            }
            if (updateUser.getBase64ProfileImg() != null){
                user.setBase64ProfileImg(updateUser.getBase64ProfileImg());
            }

            return new ApiResponse<>(user, 200, "User Updated");
        }
        else {
            new ApiResponse<>(updateUser, 404, "user update failed");
        }
        return new ApiResponse<>(user, 200, "User Updated");
    }

//    @Override
//    public User deleteUser(String userId) {
//                Optional<User> exUser = userRepository.findUserBy_id(userId);
//
//
//        if (exUser.isPresent()){
//            User deletedUser = exUser.get();
//            userRepository.deleteBy_id(userId);
//            return deletedUser;
//        }else {
//            throw new IllegalStateException("User not found");
//        }
//    }


}
