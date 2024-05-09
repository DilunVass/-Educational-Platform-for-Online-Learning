package com.educationPlatform.contentservice.service;


import com.educationPlatform.contentservice.models.CourseContent;
import com.educationPlatform.contentservice.repository.CourseContentRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CourseContentService {

    @Autowired
    private CourseContentRepository courseContentRepository;

    public CourseContent createCourseContent(CourseContent content){
        return courseContentRepository.save(content);
    }


}
