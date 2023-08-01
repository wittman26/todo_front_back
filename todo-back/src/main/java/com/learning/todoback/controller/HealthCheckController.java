package com.learning.todoback.controller;

import com.learning.todoback.model.HealthCheckLearning;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {


  @GetMapping(value = "/healthcheck-bean", produces = MediaType.APPLICATION_JSON_VALUE)
  public HealthCheckLearning getHealth2() {
    return new HealthCheckLearning("Service TODO is running OK");
  }

  @GetMapping(value = "/healthcheck", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<String> getHealth() {
    return new ResponseEntity<>("Service TODO is running", HttpStatus.OK);
  }
}
