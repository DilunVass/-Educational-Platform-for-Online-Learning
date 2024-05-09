package com.educationPlatform.contentservice.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "contents")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class CourseContent {

    @Id
    private String _id;

    private String courseId;

    private String sectionId;

    private String textContent;

    private List<String> imageUrls;

    private List<String> videoUrls;

}