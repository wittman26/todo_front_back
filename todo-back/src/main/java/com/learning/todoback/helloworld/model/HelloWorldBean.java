package com.learning.todoback.helloworld.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class HelloWorldBean {
  String message;

  public HelloWorldBean(String message) {
    this.message = message;
  }
}
