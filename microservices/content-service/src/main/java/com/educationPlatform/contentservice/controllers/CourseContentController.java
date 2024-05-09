package com.educationPlatform.contentservice.controllers;


import com.educationPlatform.contentservice.models.CourseContent;
import com.educationPlatform.contentservice.service.CourseContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/content")
public class CourseContentController {

    @Autowired
    CourseContentService service;

    @PostMapping
    public CourseContent addContent(@RequestBody CourseContent content){
        return service.createCourseContent(content);
    }
}
