package com.example.task_list_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.task_list_api.entities.Task;
import com.example.task_list_api.repository.TaskRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TaskService {
    
    private final TaskRepository repository;

    public List<Task> getAllTasks(){
        return repository.findAll();
    }

    public Task addtask(Task task) {
        return repository.save(task);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = repository.findById(id).orElseThrow(() -> new RuntimeException("Task not found."));
        task.setTitle(taskDetails.getTitle());
        task.setStatus(taskDetails.getStatus());
        return repository.save(task);
    }

    public void deleteTask(Long id) {
        repository.deleteById(id);
    }
}
