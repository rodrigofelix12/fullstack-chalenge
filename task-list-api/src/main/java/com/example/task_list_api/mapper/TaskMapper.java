package com.example.task_list_api.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import com.example.task_list_api.dto.TaskDto;
import com.example.task_list_api.entities.Task;
import com.example.task_list_api.response.TaskResponse;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    
    List<TaskResponse> toResponse(List<Task> tasks);

    Task toTask(TaskDto dto);
}
