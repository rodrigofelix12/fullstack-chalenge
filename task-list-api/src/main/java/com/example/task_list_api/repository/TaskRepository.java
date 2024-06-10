package com.example.task_list_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.task_list_api.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    
}
