package com.learning.todoback.controller;

import com.learning.todoback.model.HelloWorldBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HealthCheckController {

  @GetMapping(value = "/healthcheck-bean", produces = MediaType.APPLICATION_JSON_VALUE)
  public HelloWorldBean getHealth2() {
    return HelloWorldBean.builder()
            .message("Service TODO is running OK")
            .build();
  }

  @GetMapping(value = "/healthcheck", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<String> getHealth() {
    return new ResponseEntity<>("Service TODO is running", HttpStatus.OK);
  }

  @GetMapping(value = "/healthcheck-bean/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
    return HelloWorldBean.builder().message(String.format("Hello World, %s", name)).build();
  }
}
