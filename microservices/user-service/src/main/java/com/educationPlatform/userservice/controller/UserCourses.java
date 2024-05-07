//package com.educationPlatform.userservice.controller;
//
//import com.educationPlatform.userservice.model.User;
//import com.educationPlatform.userservice.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/user/course")
//public class UserCourses {
//
//    @Autowired
//    private UserService userService;
//
//    @PutMapping("/{userId}/{courseId}")
//    public ResponseEntity<Object> addCourse(@PathVariable("userId") String userId, @PathVariable("courseId") String courseId){
//        User user = userService.addCourse(userId, courseId);
//        return ResponseEntity.ok(user);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Object> getUser(@PathVariable("id") String userId){
//        try{
//            User user = userService.getUser(userId);
//            return ResponseEntity.ok(user);
//        }catch (Exception e){
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//        }
//    }
//}
