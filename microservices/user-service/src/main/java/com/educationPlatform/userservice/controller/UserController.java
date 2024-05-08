package com.educationPlatform.userservice.controller;

import com.educationPlatform.userservice.dto.UserDTO;
import com.educationPlatform.userservice.model.User;
import com.educationPlatform.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> addUser(@RequestBody UserDTO dto){

        ResponseEntity response = null;

        try{
            response = service.addUser(dto);
            System.out.println(response);
            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        try {
            return new ResponseEntity<List<User>>(service.getAllUsers(), HttpStatus.OK);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUser(@PathVariable("id") String userId){
        try{
            User user = service.getUser(userId);
            return ResponseEntity.ok(user);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Object> updateUser(@PathVariable("id") String userId, @RequestBody UserDTO userDTO){
//        User updateUser = service.updateUser(userId, userDTO);
//
//        if (userDTO != null){
//            return ResponseEntity.ok(updateUser);
//        }else {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Object> deleteUser(@PathVariable("id") String userId){
//        try{
//            User deletedUser = service.deleteUser(userId);
//            return ResponseEntity.ok(deletedUser);
//        }catch (Exception e){
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//        }
//    }


}
