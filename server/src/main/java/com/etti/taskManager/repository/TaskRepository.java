package com.etti.taskManager.repository;

import org.springframework.data.repository.CrudRepository;

import com.etti.taskManager.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {
	
}
