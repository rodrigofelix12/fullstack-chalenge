package com.example.task_list_api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.task_list_api.dto.TaskDto;
import com.example.task_list_api.entities.Task;
import com.example.task_list_api.mapper.TaskMapper;
import com.example.task_list_api.response.TaskResponse;
import com.example.task_list_api.service.service.TaskService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class TaskController {
 
    private final TaskService taskService;
    private final TaskMapper taskMapper;

    @GetMapping
    public List<TaskResponse> getAllTasks() {
        return taskMapper.toResponse(taskService.getAllTasks());
    }

    @PostMapping
    public Task addTask(@RequestBody TaskDto taskDto) {
        return taskService.addtask(taskMapper.toTask(taskDto));
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody TaskDto taskDto) {
        return taskService.updateTask(id, taskMapper.toTask(taskDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.ok().build();
    }
}
