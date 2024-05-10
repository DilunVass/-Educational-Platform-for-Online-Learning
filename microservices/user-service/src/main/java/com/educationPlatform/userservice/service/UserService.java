package com.educationPlatform.userservice.service;

import com.educationPlatform.userservice.dto.UserDTO;
import com.educationPlatform.userservice.model.User;
import com.educationPlatform.userservice.repository.UserRepository;
import com.educationPlatform.userservice.util.ExtraUtilities;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.educationPlatform.userservice.enums.UserRole.ADMIN;

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

    public User getUser(String userId){
        Optional<User> exUser = userRepository.findUserBy_id(userId);

        if (exUser.isPresent()){
            User user = exUser.get();
            return user;
        }else {
            throw new IllegalStateException("User not found");
        }
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }



//    public User updateUser(String userId, UserDTO userDTO){
//        Optional<User> exUser = userRepository.findUserBy_id(userId);
//
//        if (exUser.isPresent()){
//            User user = exUser.get();
//
//            if (userDTO.getFirstName() != null){
//                user.setFirstName(userDTO.getFirstName());
//            }
//            if (userDTO.getLastName() != null){
//                user.setLastName(userDTO.getLastName());
//            }
//            if (userDTO.getEmail() != null){
//                if (ExtraUtilities.isEmailValid(userDTO.getEmail())){
//                    user.setEmail(userDTO.getEmail());
//                }else {
//                    throw new IllegalStateException("Invalid email");
//                }
//            }
//            if (userDTO.getPassword() != null){
//                user.setPassword(userDTO.getPassword());
//            }
//
//            if (userDTO.getCourses() != null){
//                user.setCourses(userDTO.getCourses());
//            }
//
//            return userRepository.save(user);
//        }else {
//            throw new IllegalStateException("User not found");
//        }
//    }
//
//    public User deleteUser(String userId){
//        Optional<User> exUser = userRepository.findUserBy_id(userId);
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

    //ADD user Coursers
//    public User addCourse(String userId, String courseId){
//        Optional<User> exUser = userRepository.findUserBy_id(userId);
//
//
//        if (exUser.isPresent()){
//            User user = exUser.get();
//
//
//            if (courseId != null){
//                int numberOfCourses = user.getCourses().length;
//                int i;
//                for (i=0; i < numberOfCourses+1; i++){
//
//                }
////                String[] pastCourses = user.getCourses();
////                String[] newCourses = new String[0];
////                int i=0;
////                for (i=0; i<(pastCourses.length)+1; i++){
////                    newCourses[i] = pastCourses[i];
////                    if (i == pastCourses.length){
////                        newCourses[i] = courseId;
////                    }
////                }
////                user.setCourses(newCourses);
//            }
//            return userRepository.save(user);
//        }else {
//            throw new IllegalStateException("User not found");
//        }
//    }



    private User map(UserDTO dto){
        return User.builder()
                .user_name(dto.getUser_name())
                .first_name(dto.getFirst_name())
                .last_name(dto.getLast_name())
                .contact_no(dto.getContact_no())
                .email(dto.getContact_no())
                .password(dto.getPassword())
                .base64ProfileImg(dto.getBase64ProfileImg())
                .userRole(ADMIN)
                .build();
    }
}
