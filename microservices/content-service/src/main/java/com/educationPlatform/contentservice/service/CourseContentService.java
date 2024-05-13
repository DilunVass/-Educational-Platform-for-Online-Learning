package com.educationPlatform.contentservice.service;

import com.educationPlatform.contentservice.models.CourseContent;

import java.util.List;

public interface CourseContentService {
    public List<CourseContent> createCourseContent(List<CourseContent> contents);

    public List<CourseContent> getContentByCourseId(String courseId);

    public List<CourseContent> updateCourseContents(String courseId, List<CourseContent> updatedContents);

    public boolean deleteCourseContents(String courseId);
}
