package com.example.task_list_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.task_list_api.entities.Task;


@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    
}
