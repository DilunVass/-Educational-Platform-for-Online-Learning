package com.educationPlatform.contentservice.ServiceImpl;

import com.educationPlatform.contentservice.models.CourseContent;
import com.educationPlatform.contentservice.repository.CourseContentRepository;
import com.educationPlatform.contentservice.service.CourseContentService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class CourseContentServiceImpl implements CourseContentService {

    @Autowired
    private CourseContentRepository courseContentRepository;

    @Override
    public List<CourseContent> createCourseContent(List<CourseContent> contents){
        List<CourseContent> contentList = new ArrayList<>(contents);
        courseContentRepository.saveAll(contentList);
        return contentList;
    }

    @Override
    public List<CourseContent> getContentByCourseId(String courseId) {
        return courseContentRepository.findAllByCourseId(courseId);
    }

    @Override
    public List<CourseContent> updateCourseContents(String courseId, List<CourseContent> updatedContents) {
        List<CourseContent> existingContents = courseContentRepository.findAllByCourseId(courseId);
        if (existingContents.isEmpty()) {
            return null; // Course not found
        }

        for (CourseContent updatedContent : updatedContents) {
            for (CourseContent existingContent : existingContents) {
                if (existingContent.getSectionId().equals(updatedContent.getSectionId())) {
                    existingContent.setTitle(updatedContent.getTitle());
                    existingContent.setTextContent(updatedContent.getTextContent());
                    existingContent.setImages(updatedContent.getImages());
                    existingContent.setVideoUrls(updatedContent.getVideoUrls());
                    courseContentRepository.save(existingContent);
                    break;
                }
            }
        }
        return existingContents;
    }

    @Override
    public boolean deleteCourseContents(String courseId) {
        List<CourseContent> courseContents = courseContentRepository.findAllByCourseId(courseId);
        if (courseContents.isEmpty()) {
            return false; // Course not found
        }

        courseContentRepository.deleteByCourseId(courseId);
        return true;
    }


}
