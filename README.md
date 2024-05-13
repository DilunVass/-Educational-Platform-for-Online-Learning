# NexTutor - Educational-Platform-for-Online-Learning

Group Members

IT21288012	
De Vass Gunawardane A.P.D.N

IT21355028	
Marasinghe M.M.C

IT21268076	
Karunathilaka H.M.C.H

IT21208430	
Athuluwage T.N


Introduction
In today's quickly changing world, education is essential for both professional and personal development. However, in a time characterized by digital connectedness and personalized learning preferences, traditional educational approaches frequently find it difficult to meet the different demands of learners. Acknowledging this difficulty, our project intends to transform the educational environment by presenting an all-inclusive Learning Management System (LMS) to meet today's learners' needs.
Our learning management system, Nex Tutor, combines state-of-the-art functionalities and services to provide users worldwide with a dynamic and customized learning environment. Nex Tutor enables educators and students to succeed in an increasingly digital learning environment by seamlessly fusing user administration, course development, content distribution, financial management, certification, community interaction, analytics, and support functions.

Architectural Diagram


![image](https://github.com/DilunVass/-Educational-Platform-for-Online-Learning/assets/100837990/3b085956-98c2-47cd-9eb4-456cde02c197)

Prerequisites

Docker and Docker Compose installed on your system.
Node.js and npm installed for React development.

Spring Boot Application: A RESTful API connecting to a MongoDB database.
React Application: A frontend application built with React, serving as the client for the Spring Boot API.

Setup and Deployment

Step 1: Clone the Repository
Clone the repository to your local machine.

git clone <"GitHub repository url">
cd repository-name

Step 2: Build and Run the Spring Boot Application
Navigate to the Spring Boot application directory and build the Docker image.

cd microservices

docker build -t service .

Run the Spring Boot application using Docker Compose.

cd..
docker-compose up -d

Step 3: Build and Serve the React Application

Navigate to the React application directory and build the production version.

cd client
npm start

Step 4: Access the Applications

Spring Boot Application: Access the Spring Boot application at http://localhost:8080.
React Application: Access the React application at http://localhost:3000.

Step 5: Stop the Applications
To stop the applications, navigate to the root directory of your project and run:

docker-compose down

Configuration
The Spring Boot application is configured to connect to MongoDB using the service name api-database defined in the docker-compose.yml file.
Adjust the port mappings in the docker-compose.yml file according to your application's requirements.
