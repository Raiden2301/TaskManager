package com.etti.taskManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.etti.taskManager.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	
}
