package com.example.task_list_api.dto;


import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class TaskDto {
    @NotNull
    private String title;

    @NotNull
    private String status;
}
