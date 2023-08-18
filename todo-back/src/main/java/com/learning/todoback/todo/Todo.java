package com.learning.todoback.todo;

import java.util.Date;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class Todo {
  private long id;
  private String username;
  private String description;
  private Date targetDate;
  private boolean isDone;
}
