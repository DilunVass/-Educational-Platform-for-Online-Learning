package com.example.api_gateway.Config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiGatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("service1_route", r -> r.path("/api/courses/**")
                        .uri("http://localhost:8083"))
                .route("service2_route", r -> r.path("/api/payments/**")
                        .uri("http://localhost:8084"))
                .build();
    }

}
